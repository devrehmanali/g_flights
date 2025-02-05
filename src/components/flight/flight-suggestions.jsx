import { useState } from "react";
import Breadcrumb from "../shared/breadcrumbs/breadcrumbs";
import FlightCard from "./flight-card";

export default function FlightsSection() {
  const [showMore, setShowMore] = useState(false);
  const [city, setCity] = useState("Riyadh");

  const flights = [
    {
      from: "Los Angeles",
      to: "London",
      dates: "Apr 10 — Apr 16",
      nonstop: false,
      stopCount: 1,
      flightTime: "35 hr 25 min",
      airline: "Virgin Atlantic",
      class: "Economy",
      price: "SAR 2,738",
      baggageAllowance: "1 checked bag, 1 carry-on",
      departureAirport: "LAX",
      arrivalAirport: "LHR",
      layovers: [{ city: "New York", duration: "3 hr 20 min" }],
      totalTravelTime: "37 hr 30 min",
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4B0K7etaN3KgEgtU5dJajdcmLtB5QSDRYr4KqcwH1iWxMm7TIqwtcUTTHD5AmNyeeFIpVpTnbSDeuD_HVlkYzOam-TO9w1worRSGRTUo",
    },
    {
      from: "New York",
      to: "Paris",
      dates: "Apr 15 — Apr 20",
      nonstop: false,
      stopCount: 1,
      flightTime: "12 hr 45 min",
      airline: "Air France",
      class: "Economy",
      price: "SAR 3,200",
      baggageAllowance: "1 checked bag, 1 carry-on",
      departureAirport: "JFK",
      arrivalAirport: "CDG",
      layovers: [{ city: "Amsterdam", duration: "2 hr" }],
      totalTravelTime: "15 hr 30 min",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IjjmO-VtFljZ3fiFy-6ctDP2rGws4_-1JfFgRmI3Hb6PY1pgIpaKrbgrD-1Bpj5EXN1dtkwJkFddLtbd5nFhJfLIEEpbkaQ55",
    },
    {
      from: "London",
      to: "New York",
      dates: "May 1 — May 7",
      nonstop: true,
      flightTime: "8 hr 15 min",
      airline: "British Airways",
      class: "Economy",
      price: "SAR 4,500",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "LHR",
      arrivalAirport: "JFK",
      layovers: [],
      totalTravelTime: "8 hr 15 min",
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYggxT2KTejchSkxPlkU5v10fQhDN6zFfdoW5H9dkxOYF8Fkm5ZD2sxwgsTlhjVsqFBeNEloNOg56MB6ygYp6mXWdfHF0KpEDvHqzJg",
    },
    {
      from: "Dubai",
      to: "Paris",
      dates: "May 5 — May 12",
      nonstop: false,
      stopCount: 1,
      flightTime: "8 hr 50 min",
      airline: "Emirates",
      class: "Business",
      price: "SAR 3,150",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "DXB",
      arrivalAirport: "CDG",
      layovers: [{ city: "Istanbul", duration: "2 hr 10 min" }],
      totalTravelTime: "11 hr 20 min",
      imageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSg-2ij0sCm3_FF5BglFk2MQIqTm0tnlUtyE_Dz61T1SyyZJwp3p1hNcywBzFVtGGY-1IZl6dbu0gZ2QeeV7S8fxvxCZptqkbQfOht0",
    },
    {
      from: "Paris",
      to: "Los Angeles",
      dates: "Jun 1 — Jun 10",
      nonstop: true,
      flightTime: "10 hr 25 min",
      airline: "Air France",
      class: "Economy",
      price: "SAR 5,200",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "CDG",
      arrivalAirport: "LAX",
      layovers: [],
      totalTravelTime: "10 hr 25 min",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfOwiyQl69_lc1r32A-IQgsu5yLSNqG-dzud5rIRm0Hkcw-qwv4ZqX8v10C5kRPVjtguoB1-hyq7lbXNC-F6Dgn8-HbGfK7psZGzRNY",
    },
    {
      from: "Tokyo",
      to: "Dubai",
      dates: "Apr 25 — May 2",
      nonstop: false,
      stopCount: 1,
      flightTime: "11 hr 10 min",
      airline: "Emirates",
      class: "Economy",
      price: "SAR 6,000",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "NRT",
      arrivalAirport: "DXB",
      layovers: [{ city: "Bangkok", duration: "1 hr 30 min" }],
      totalTravelTime: "13 hr 30 min",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRl2lbVxWgcsADWhmXIFt8Eug32jVuTcdP0jXftN4SvsahjlhSOqWmtfBEPkCtfjpKaYwltvHgwzkg2jc5_1QQOIg7wAB3m_cbsJ0",
    },
    {
      from: "Singapore",
      to: "Los Angeles",
      dates: "Jun 5 — Jun 12",
      nonstop: true,
      flightTime: "17 hr 45 min",
      airline: "Singapore Airlines",
      class: "Economy",
      price: "SAR 4,500",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "SIN",
      arrivalAirport: "LAX",
      layovers: [],
      totalTravelTime: "17 hr 45 min",
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7op_UwRPdcX77jhbwlV-XmhrIcch1cqFGt9GqbuP0hYps3ymhQwMK0UHKbZDndfj8Nfn7Myn7h9tgsT-BgGzqg5kdIXaEnnkJzd3s",
    },
    {
      from: "Sydney",
      to: "Dubai",
      dates: "Jul 1 — Jul 7",
      nonstop: false,
      stopCount: 1,
      flightTime: "14 hr 50 min",
      airline: "Qantas",
      class: "Economy",
      price: "SAR 7,200",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "SYD",
      arrivalAirport: "DXB",
      layovers: [{ city: "Singapore", duration: "3 hr 10 min" }],
      totalTravelTime: "18 hr",
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSC0ezxqq3gbPlT8uXTpf_J2l9FhRh25AIV6lC1JZp5m-9Zq7b3MGpFWYjfKjbBhznbUPK1X8nRS9X5lxm4DdFVFhFjVf8C7h5jfoP4",
    },
    {
      from: "Dubai",
      to: "Bangkok",
      dates: "Jul 10 — Jul 17",
      nonstop: true,
      flightTime: "6 hr 25 min",
      airline: "Thai Airways",
      class: "Economy",
      price: "SAR 4,000",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "DXB",
      arrivalAirport: "BKK",
      layovers: [],
      totalTravelTime: "6 hr 25 min",
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSYXXIcV3A0GvXk5h7QGqsqfXlV7U1T-6Dw99UN5JfFOm-XQgQxh0jIxeYfbXtInXBcso6Te-2g5xFHY49_JEmwAXV6ad8y5KfP2k",
    },
    {
      from: "Bangkok",
      to: "Singapore",
      dates: "Jul 20 — Jul 27",
      nonstop: true,
      flightTime: "2 hr 35 min",
      airline: "Singapore Airlines",
      class: "Economy",
      price: "SAR 3,000",
      baggageAllowance: "1 checked bag, 1 carry-on",
      departureAirport: "BKK",
      arrivalAirport: "SIN",
      layovers: [],
      totalTravelTime: "2 hr 35 min",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2nNl6swf_rCcm4r9QVsLf30f-Xj2vR2x1rWg8iGAhT3U9M_dH-Gxt9QJ0mLOa-DwwR0df7zz9OBkz3X_A9AAVi2_JH4npzoQ-0eRg",
    },
    {
      from: "Cape Town",
      to: "Dubai",
      dates: "Aug 5 — Aug 12",
      nonstop: false,
      stopCount: 1,
      flightTime: "10 hr 30 min",
      airline: "Emirates",
      class: "Economy",
      price: "SAR 5,800",
      baggageAllowance: "2 checked bags, 1 carry-on",
      departureAirport: "CPT",
      arrivalAirport: "DXB",
      layovers: [{ city: "Doha", duration: "2 hr 45 min" }],
      totalTravelTime: "13 hr 15 min",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PCZDoLg8RkBxgsjTqDW9jsBGjdYgH9Wp0JbAYy5VsCqbsCGSrf6Wg3MkF2yQ9_ZrDgsGL3B4D0zNcxOew9br8Jlnj28L98g-PwBs",
    },
  ];

  const flightCardsToShow = showMore ? flights : flights.slice(0, 3);

  const breadcrumbItems = [
    { label: "Flights", link: "/flights" },
    { label: "To Saudi Arabia", link: "/flights/saudi-arabia" },
    { label: "To Riyadh" }, // No link for the current page
  ];

  return (
    <div className="py-8 bg-white dark:bg-[#202124]">
      <div className="">
        {/* Render Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        <h2 className="text-2xl font-medium text-gray-800 dark:text-[#e8eaed] mt-8">
          Cheap flights from {city}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-4">
          {flightCardsToShow.map((flight, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-[#202124] rounded-lg"
            >
              <FlightCard flight={flight} />
            </div>
          ))}
        </div>

        <button
          hidden
          onClick={() => setShowMore(!showMore)}
          className="w-full text-center py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}
