import { useState } from "react";

const airlinesData = [
  {
    airline: "Saudia",
    logo: "https://www.gstatic.com/flights/airline_logos/70px/SV.png",
    flights: [
      { city: "Jeddah", duration: "1 hr 50 min" },
      { city: "Dammam", duration: "1 hr 10 min" },
      { city: "Dubai", duration: "1 hr 55 min" },
      { city: "Abha", duration: "1 hr 45 min" },
      { city: "Madinah", duration: "1 hr 40 min" },
    ],
  },
  {
    airline: "Emirates",
    logo: "https://www.gstatic.com/flights/airline_logos/70px/EK.png",
    flights: [
      { city: "Dubai", duration: "1 hr 50 min" },
      { city: "London", duration: "7 hr 10 min" },
      { city: "New York", duration: "14 hr 55 min" },
      { city: "Sydney", duration: "13 hr 45 min" },
    ],
  },
  {
    airline: "Qatar Airways",
    logo: "https://www.gstatic.com/flights/airline_logos/70px/QR.png",
    flights: [
      { city: "Doha", duration: "1 hr 5 min" },
      { city: "Paris", duration: "6 hr 50 min" },
      { city: "Tokyo", duration: "11 hr 20 min" },
      { city: "Los Angeles", duration: "15 hr 10 min" },
    ],
  },
];

const PopularFlights = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-9">
      <div className="mb-4 text-xl font-bold">
        Popular airlines with direct flights from Riyadh
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-4">
          {airlinesData.map((airline, index) => (
            <div
              key={index}
              className="border border-[#5f6368] rounded-lg shadow-lg text-white"
            >
              {/* Collapsed Card */}
              <div
                className="p-4 cursor-pointer flex items-center justify-between rounded-lg"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center">
                  <img
                    src={airline.logo}
                    alt={airline.airline}
                    className="w-12 h-12 mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{airline.airline}</h3>
                    <p className="text-gray-400">Flights Available</p>
                  </div>
                </div>
                <svg
                  className={`w-9 h-9 hover:bg-[#303134] p-2 rounded-full transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Expanded Card Content */}
              {expandedIndex === index && (
                <div className="p-4 ">
                  {console.log(expandedIndex, index, "KKKKKKKKKKKKKKKKKKKKKKK")}
                  <div className="space-y-2">
                    {airline.flights.map((flight, flightIndex) => (
                      <div
                        key={flightIndex}
                        className="flex justify-between items-center border-b border-b-[#5f6368] p-3 shadow-sm"
                      >
                        <p className="font-medium">{flight.city}</p>
                        <p className="text-gray-400">Direct flights daily</p>
                        <p className="text-gray-300">{flight.duration}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      style={{
                        boxShadow:
                          "0 1px 2px 0 #3c40434d, 0 1px 3px 1px #3c404326;",
                      }}
                      className="w-full border border-[#5f6368] hover:border-[#5f6368]  md:w-auto px-6 py-2 text-sm bg-[#202124] rounded-full text-[#aecbfa] hover:shadow-lg hover:bg-[#303134]"
                    >
                      Explore all saudi flights
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularFlights;
