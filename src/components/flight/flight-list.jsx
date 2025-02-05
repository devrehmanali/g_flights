export default function FlightList({ flights }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Available Flights
      </h2>

      {flights.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          No flights found.
        </p>
      ) : (
        <div className="grid gap-4 mt-4">
          {flights.map((flight, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#171717] shadow-md rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {flight.airline}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {flight.from} ✈ {flight.to}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {flight.departureTime} - {flight.arrivalTime}
              </p>
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                ${flight.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
