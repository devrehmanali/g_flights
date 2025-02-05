import { useState, useEffect, useRef } from "react";

const CustomDatePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState("departure");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [nextMonth, setNextMonth] = useState(
    new Date(new Date().setMonth(new Date().getMonth() + 1))
  );
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const calendarRef = useRef(null);

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getMonthDays = (date) => {
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startDay = monthStart.getDay();
    const endDate = monthEnd.getDate();

    return Array.from({ length: 42 }, (_, i) => {
      const day = i - startDay + 1;
      return {
        day: day > 0 && day <= endDate ? day : null,
        currentMonth: day > 0 && day <= endDate,
        date:
          day > 0 && day <= endDate
            ? new Date(date.getFullYear(), date.getMonth(), day)
            : null,
      };
    });
  };

  const handleDateSelect = (date) => {
    if (activeInput === "departure") {
      setDepartureDate(date);
      setReturnDate(null);
    } else {
      if (date > departureDate) {
        setReturnDate(date);
      }
    }
  };

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CalendarGrid = ({ month }) => {
    const daysArray = getMonthDays(month);

    return (
      <div className="p-2 md:p-4 flex-1 min-w-[280px]">
        <div className="text-center font-medium mb-2 text-sm md:text-base">
          {month.toLocaleString("default", { month: "long", year: "numeric" })}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-xs md:text-sm py-1 text-gray-400"
            >
              {day}
            </div>
          ))}
          {daysArray.map(({ day, currentMonth, date }, index) => (
            <button
              key={index}
              className={`h-8 w-8 md:h-10 md:w-10 text-xs md:text-sm rounded-lg transition-colors
                ${
                  currentMonth
                    ? "hover:bg-gray-700"
                    : "text-gray-500 cursor-default"
                }
                ${
                  date && departureDate?.toDateString() === date.toDateString()
                    ? "bg-blue-600 hover:bg-blue-700"
                    : ""
                }
                ${
                  date && returnDate?.toDateString() === date.toDateString()
                    ? "bg-green-600 hover:bg-green-700"
                    : ""
                }
                ${
                  date && date > departureDate && date < returnDate
                    ? "bg-gray-700"
                    : ""
                }
              `}
              onClick={() => currentMonth && handleDateSelect(date)}
              disabled={!currentMonth}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const updateMonths = (months) => {
    const newCurrentMonth = new Date(currentMonth);
    newCurrentMonth.setMonth(newCurrentMonth.getMonth() + months);
    setCurrentMonth(newCurrentMonth);
    setNextMonth(
      new Date(newCurrentMonth.getFullYear(), newCurrentMonth.getMonth() + 1)
    );
  };

  return (
    <div className="relative max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 p-2">
        <input
          type="text"
          placeholder="Departure"
          value={
            departureDate?.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            }) || ""
          }
          onClick={() => {
            setShowCalendar(true);
            setActiveInput("departure");
          }}
          className="w-full md:w-48 px-4 py-3 bg-gray-800 text-white rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          readOnly
        />

        <input
          type="text"
          placeholder="Return"
          value={
            returnDate?.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            }) || ""
          }
          onClick={() => {
            setShowCalendar(true);
            setActiveInput("return");
          }}
          className="w-full md:w-48 px-4 py-3 bg-gray-800 text-white rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
          readOnly
        />
      </div>

      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-20 md:top-16 left-0 right-0 mx-auto bg-gray-900 text-white rounded-lg shadow-xl z-50 
            flex flex-col md:flex-row p-2 w-[95%] md:w-auto max-w-[800px]"
        >
          <div className="flex flex-col md:flex-row flex-1">
            <CalendarGrid month={currentMonth} />
            <div className="border-t md:border-l border-gray-700" />
            <CalendarGrid month={nextMonth} />
          </div>

          <div className="flex justify-between md:flex-col md:justify-start items-center p-2 gap-2 border-t md:border-t-0 md:border-l border-gray-700">
            <button
              onClick={() => updateMonths(-1)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => updateMonths(1)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              →
            </button>
            <button
              onClick={() => {
                setCurrentMonth(new Date());
                setNextMonth(
                  new Date(new Date().setMonth(new Date().getMonth() + 1))
                );
              }}
              className="p-2 text-sm hover:bg-gray-800 rounded-lg transition-colors"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
