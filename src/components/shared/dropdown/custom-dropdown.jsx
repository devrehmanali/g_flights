import { useState } from "react";
import {
  FaCheck,
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaCaretDown,
} from "react-icons/fa";

export default function CustomDropdown({
  options,
  selected,
  onChange,
  icon,
  dropdownClass = "", // Custom class for the dropdown
  selectedClass = "", // Custom class for the selected item
  optionClass = "", // Custom class for options
}) {
  const [open, setOpen] = useState(false);

  // Define the icon to show based on the selected option
  const getSelectedIcon = () => {
    if (selected.value === "one-way") {
      return <FaExchangeAlt className="text-gray-500" />;
    }
    if (selected.value === "multi-city") {
      return <FaMapMarkerAlt className="text-gray-500" />;
    }
    if (icon === null) {
      return <></>;
    }
    return icon || <FaCaretDown className="text-gray-500" />; // Default icon if needed
  };

  return (
    <div className={`relative ${dropdownClass} bg-[#37383B]`}>
      {/* Selected Item (Clickable to open dropdown) */}
      <div
        className={`flex items-center justify-between px-4 py-2 rounded-lg bg-white dark:bg-[#37383B] dark:text-gray-300 cursor-pointer ${selectedClass}`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          {getSelectedIcon()} {/* Conditional icon */}
          <span>{selected.label}</span>
        </div>
        <FaCaretDown className="text-gray-500" />
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute w-auto bg-white dark:bg-[#36373A] border-none rounded-lg shadow-lg mt-2 z-10">
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer ${optionClass}`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {/* Checkmark for the selected item */}
              {selected.value === option.value && (
                <FaCheck className="text-gray-400" />
              )}
              <div className="flex items-center gap-2">
                {option.value === "one-way" && (
                  <FaExchangeAlt className="text-gray-500" />
                )}
                {option.value === "multi-city" && (
                  <FaMapMarkerAlt className="text-gray-500" />
                )}
                <span>{option.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
