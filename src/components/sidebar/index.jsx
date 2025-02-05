import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-[#171717] shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
        <span>Filters</span>
      </h2>

      {/* Price Range */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Price Range
        </label>
        <input type="range" className="w-full mt-2" />
      </div>

      {/* Stops */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Stops
        </label>
        <select className="w-full p-2 border rounded mt-2 bg-white dark:bg-[#171717] dark:text-gray-300">
          <option>Non-Stop</option>
          <option>1 Stop</option>
          <option>2+ Stops</option>
        </select>
      </div>
    </aside>
  );
}
