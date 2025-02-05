import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchAirportRequest } from "../../../redux/reducers/ducks/FlightDuck";

const cities = [
  {
    name: "Riyadh",
    country: "Saudi Arabia",
    details: "Capital of Saudi Arabia",
  },
  { name: "Lahore", country: "Pakistan", details: "City in Pakistan" },
  {
    name: "Allama Iqbal International Airport",
    code: "LHE",
    details: "4 km to destination",
  },
  { name: "Chota Lahore", country: "Pakistan", details: "Town in Pakistan" },
];

export default function CityDropdown({
  value,
  icon,
  onChange,
  placeholder,
  inputClassName,
}) {
  const [query, setQuery] = useState(value || "");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const { flightConfig } = useSelector(({ flight }) => ({
    flightConfig: flight?.flightConfig,
  }));

  useEffect(() => {
    dispatch(
      searchAirportRequest({
        ...flightConfig,
        lat: location.latitude,
        lon: location.longitude,
        locale: flightConfig?.market,
        query: query,
      })
    );
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    setShowDropdown(true);

    if (searchTerm.length > 0) {
      const results = cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSelectCity = (city) => {
    onChange(city.name);
    setQuery(city.name);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center border border-[#5f6368] hover:border-[#9aa0a6] focus-within:border-[#669df6] min-h-14 w-full p-3 bg-[#F4F5F7] dark:bg-[#36373A] dark:text-gray-300 rounded-md">
        {icon}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`bg-transparent text-[#e8eaed] ${inputClassName}`}
          onFocus={() => setShowDropdown(true)}
        />
      </div>

      {showDropdown && filteredCities.length > 0 && (
        <div className="absolute bg-white dark:bg-[#36373A] text-gray-900 dark:text-gray-200 w-full rounded-md shadow-lg mt-1 z-50">
          {filteredCities.map((city, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-100 dark:hover:bg-[#414141] cursor-pointer"
              onClick={() => handleSelectCity(city)}
            >
              <strong>{city.name}</strong>
              {city.country && (
                <span className="text-sm text-gray-500">, {city.country}</span>
              )}
              {city.details && (
                <p className="text-xs text-gray-400">{city.details}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
