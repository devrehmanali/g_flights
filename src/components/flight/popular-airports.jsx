import { AiOutlineInfoCircle } from "react-icons/ai";

const PopularAirports = () => {
  const airports = [
    {
      name: "King Khalid International Airport",
      code: "RUH",
      location: "Riyadh",
      drivingTime: "30 min",
      distance: "27 km",
    },
    {
      name: "King Fahd International Airport",
      code: "DMM",
      location: "Dammam",
      drivingTime: "3 hr 57 min",
      distance: "368 km",
    },
    {
      name: "Prince Naif Bin Abdulaziz International Airport",
      code: "ELQ",
      location: "Al Qassim Province",
      drivingTime: "3 hr 39 min",
      distance: "340 km",
    },
    {
      name: "Al-Ahsa Airport",
      code: "HOF",
      location: "Al Hofuf",
      drivingTime: "3 hr 23 min",
      distance: "290 km",
    },
  ];

  return (
    <div className="mt-8 bg-white dark:bg-[#202124]">
      <h2 className="flex items-center  text-xl font-semibold mb-2">
        Popular airports near Riyadh
        <span className="ml-1 text-gray-500 text-sm">
          <AiOutlineInfoCircle size={20} />
        </span>
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {airports.map((airport, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 py-4 rounded-lg"
          >
            <div className="flex-shrink-0">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 33"
                fill="#8ab4f8"
                className=""
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="11.316" fill="currentColor" />
                <circle cx="16" cy="16" r="10.816" stroke="white" />
                <path
                  d="M21.452 17.317l.021-1.095-4.556-2.829.059-3.011c.009-.455-.37-.83-.848-.839-.479-.01-.872.35-.881.804l-.06 3.012-4.664 2.646-.022 1.096 4.638-1.278-.06 3.011-1.169.799-.016.821 2.028-.508 2.006.588.017-.822-1.137-.844.06-3.011 4.584 1.46z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="font-medium text-base text-white dark:text-[#e8eaed]">
                {airport.name} <span className="">({airport.code})</span>
              </div>
              <div className="text-sm text-[#9aa0a6] font-normal flex items-center space-x-2">
                <span>{airport.location}</span>
                <span className="text-gray-400">•</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-gray-500"
                  aria-label="driving time"
                >
                  <path
                    d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"
                    fill="currentColor"
                  />
                  <circle cx="7.5" cy="14.5" r="1.5" fill="currentColor" />
                  <circle cx="16.5" cy="14.5" r="1.5" fill="currentColor" />
                </svg>
                <span>{airport.drivingTime}</span>
                <span className="text-gray-400">•</span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4 text-gray-500"
                  aria-label="distance to the center"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                </svg>
                <span>{airport.distance}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularAirports;
