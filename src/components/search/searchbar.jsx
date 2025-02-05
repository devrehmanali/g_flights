import { useState, useRef, useEffect } from "react";
import {
  FaUserFriends,
  FaExchangeAlt,
  FaChevronDown,
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDropdown from "../shared/dropdown/custom-dropdown";
import CityDropdown from "../shared/dropdown/city-dropdown";
import { RiCalendar2Fill } from "react-icons/ri";
import { travelClasses, tripTypes } from "../../contants";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { useDispatch, useSelector } from "react-redux";
import {
  getNearByAirportsRequest,
  searchFlightsV2Request,
} from "../../redux/reducers/ducks/FlightDuck";
import dayjs from "dayjs";

export default function SearchBar() {
  const [tripType, setTripType] = useState(tripTypes[0]);
  const [travelClass, setTravelClass] = useState(travelClasses[0]);
  const [dateRange, setDateRange] = useState([
    dayjs().toDate(),
    dayjs().add(5, "day").toDate(),
  ]);
  const [startDate, endDate] = dateRange;
  const dispatch = useDispatch();
  const { flightConfig } = useSelector(({ flight }) => ({
    flightConfig: flight?.flightConfig,
  }));

  const { location } = useCurrentLocation();
  // Passengers State
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    lapInfants: 0,
  });
  const [isPassengersOpen, setIsPassengersOpen] = useState(false);
  const [tempPassengers, setTempPassengers] = useState(passengers);

  const totalPassengers =
    passengers.adults +
    passengers.children +
    passengers.infants +
    passengers.lapInfants;

  const updatePassengers = (type, value) => {
    setTempPassengers((prev) => ({ ...prev, [type]: Math.max(0, value) }));
  };

  // Ref for detecting outside clicks to close the dropdown
  const passengersRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        passengersRef.current &&
        !passengersRef.current.contains(event.target)
      ) {
        setIsPassengersOpen(false); // Close the dropdown if click is outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    dispatch(
      getNearByAirportsRequest({
        ...location,
        ...flightConfig,
        lat: location.latitude,
        lon: location.longitude,
        locale: flightConfig?.market,
      })
    );

    dispatch(
      searchFlightsV2Request({
        ...flightConfig,
        date: dayjs(startDate).format("YYYY-MM-DD"),
        returnDate: dayjs(endDate).format("YYYY-MM-DD"),
        ...passengers,
        cabinClass: travelClass.value,
        tripType: tripType.value,
      })
    );
  }, [
    dispatch,
    flightConfig,
    location,
    startDate,
    endDate,
    passengers,
    travelClass,
    tripType,
  ]);

  return (
    <div className="relative bg-white dark:bg-[#202124] ">
      <div className="bg-white dark:bg-[#36373A] shadow-md pt-2 px-4 pb-12 rounded-lg relative z-10">
        <div className="flex justify-center items-center w-fit">
          {/* Trip Type Dropdown */}
          <div className="w-fit">
            <label
              hidden
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Trip Type
            </label>
            <CustomDropdown
              options={tripTypes}
              selected={tripType}
              onChange={setTripType}
              icon={<FaExchangeAlt />}
              dropdownClass="w-full rounded-none dark:bg-[37383B]" // Fit width to content
              selectedClass="bg-white dark:bg-[#202124]" // Consistent background color
              optionClass="text-gray-700 dark:text-gray-300 hover:bg-[#E8E9ED] dark:hover:bg-[#333739]" // Hover effect for options
            />
          </div>

          {/* Passengers Dropdown */}
          <div className="relative" ref={passengersRef}>
            <label
              hidden
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Passengers
            </label>
            <div
              className="relative"
              onClick={() => setIsPassengersOpen(!isPassengersOpen)}
            >
              <div className="flex items-center bg-[#F4F5F7] dark:bg-[#36373A] rounded p-3 cursor-pointer">
                <FaUserFriends className="mr-2 text-gray-500" />
                <span>{totalPassengers}</span>
                <FaChevronDown className="ml-2 text-gray-500" />
              </div>

              {isPassengersOpen && (
                <div className="absolute lg:w-64 bg-white dark:bg-[#36373A] border-none rounded-lg shadow-lg p-4 mt-1 z-10">
                  {[
                    { label: "Adults", type: "adults", desc: "" },
                    { label: "Children", type: "children", desc: "Aged 2-11" },
                    { label: "Infants", type: "infants", desc: "In seat" },
                    {
                      label: "Lap Infants",
                      type: "lapInfants",
                      desc: "On lap",
                    },
                  ].map(({ label, type, desc }) => (
                    <div
                      key={type}
                      className="flex justify-between items-center py-2 dark:bg-[#36373A]"
                    >
                      <div className="text-gray-700 dark:text-gray-300">
                        <div>{label}</div>
                        <small>{desc}</small>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updatePassengers(type, tempPassengers[type] - 1);
                          }}
                          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
                        >
                          -
                        </button>
                        <span>{tempPassengers[type]}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updatePassengers(type, tempPassengers[type] + 1);
                          }}
                          className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => {
                        setTempPassengers(passengers); // Reset to original passengers
                        setIsPassengersOpen(false); // Close dropdown
                      }}
                      className="px-4 py-2 bg-transparent border-none hover:dark:bg-[#3b3D42] text-gray-400 dark:text-blue-300 rounded-full"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setPassengers(tempPassengers); // Confirm passengers selection
                        setIsPassengersOpen(false); // Close dropdown
                      }}
                      className="px-4 py-2 bg-transparent border-none text-gray-400 dark:text-blue-300 hover:dark:bg-[#3b3D42] text-white rounded-full"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Travel Class Dropdown */}
          <div className="w-fit">
            <label
              hidden
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Customer Class
            </label>
            <CustomDropdown
              options={travelClasses}
              selected={travelClass}
              onChange={setTravelClass}
              icon={null}
              dropdownClass="w-full "
              selectedClass="bg-[#F4F5F7] dark:bg-[#36373A]"
              optionClass="lg:w-60 text-gray-700 dark:text-gray-300 border-none hover:bg-[#E8E9ED] dark:hover:bg-[#37382B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr] sm:grid-cols-[1.3fr_.7fr] items-center gap-2 relative">
          <div className="flex justify-center items-center gap-2">
            <div className="w-full">
              <label
                hidden
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                From
              </label>
              <CityDropdown
                placeholder="Riyadh"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    focusable="false"
                    fill="#9aa0a6"
                    className="mr-2"
                  >
                    <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
                  </svg>
                }
                className="clip-inward-right custom-shadow border border-[#5f6368] hover:border-[#9aa0a6] focus:border-2 focus:border-[#669df6] focus-visible:border-[#669df6] min-h-14 w-full p-3 bg-[#F4F5F7] dark:bg-[#36373A] dark:text-gray-300 rounded mt-1"
              />
            </div>
            <span className="absolute bg-[#36373A] w-9 h-9 z-10 border border-[#5f6368]  box-border rounded-full flex justify-center items-center p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white"
              >
                <path d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z" />
              </svg>
            </span>

            <div className="w-full">
              <label
                hidden
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Where to?
              </label>
              <CityDropdown
                placeholder="Enter Destination"
                icon={<FaMapMarkerAlt className="text-gray-500 ml-2 mr-2" />}
                className="clip-inward-left border border-[#5f6368] hover:border-[#9aa0a6] focus:border-[#669df6] focus-visible:border-[#669df6] min-h-14 w-full p-3 bg-[#F4F5F7] dark:bg-[#36373A] dark:text-gray-300 rounded mt-1"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-md border border-[#5f6368] hover:border-[#9aa0a6] focus:border-[#669df6] ">
            <div className="w-full bg-transparent">
              <label
                hidden
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Departure
              </label>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={tripType.value === "one-way" ? null : endDate}
                onChange={(update) => setDateRange(update)}
                minDate={new Date()}
                icon={<RiCalendar2Fill />}
                className="w-full custom-shadow p-3 min-h-14 bg-[#F4F5F7] dark:bg-[#36373A] dark:text-gray-300 rounded"
                // className="w-full custom-shadow p-3 min-h-14 border border-[#5f6368] hover:border-[#9aa0a6] focus:border-[#669df6] focus-visible:border-[#669df6] bg-[#F4F5F7] dark:bg-[#36373A] dark:text-gray-300 rounded"
                placeholderText="Select Date Range"
              />
            </div>
            <div className="w-full bg-transparent">
              <label
                hidden
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Return
              </label>
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={tripType.value === "one-way" ? null : endDate}
                onChange={(update) => setDateRange(update)}
                minDate={new Date()}
                className="w-full p-3 custom-shadow min-h-14 bg-[#F4F5F7] dark:bg-[#36373A] dark:text-gray-300 rounded"
                // className="w-full p-3 custom-shadow min-h-14 border border-[#5f6368] hover:border-[#9aa0a6] focus:border-[#669df6] focus-visible:border-[#669df6] bg-[#F4F5F7] dark:bg-[#36373A] dark:text-gray-300 rounded"
                placeholderText="Select Date Range"
              />
            </div>
          </div>
        </div>

        <button className="absolute left-1/2 bottom-[-30px] transform -translate-x-1/2 mt-6 bg-[#8ab4f8] text-white py-2 rounded-full hover:bg-[#8ab4f8]">
          <div className="flex justify-center items-center">
            <span className="mr-3">
              <FaSearch fill="#80868b" className="w-5 h-5" />
            </span>
            <span className="text-black">Explore</span>
          </div>
        </button>
      </div>
    </div>
  );
}
