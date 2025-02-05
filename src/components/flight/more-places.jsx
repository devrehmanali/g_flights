import { useState } from "react";

const MorePlaces = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const tabs = [
    { id: "popular", label: "Popular destinations from Riyadh" },
    { id: "otherCities", label: "Flights from other cities" },
    { id: "toRiyadh", label: "Flights to Riyadh" },
  ];

  const popularDestinations = [
    { label: "Flights from Riyadh to Jeddah", href: "#" },
    { label: "Flights from Riyadh to London", href: "#" },
    { label: "Flights from Riyadh to Cairo", href: "#" },
    { label: "Flights from Riyadh to Dubai", href: "#" },
    { label: "Flights from Riyadh to Dammam", href: "#" },
    { label: "Flights from Riyadh to İstanbul", href: "#" },
    { label: "Flights from Riyadh to Paris", href: "#" },
    { label: "Flights from Riyadh to Milan", href: "#" },
    { label: "Flights from Riyadh to Kuwait City", href: "#" },
    { label: "Flights from Riyadh to New York", href: "#" },
    { label: "Flights from Riyadh to Tokyo", href: "#" },
    { label: "Flights from Riyadh to Bangkok", href: "#" },
    { label: "Flights from Riyadh to Madinah", href: "#" },
    { label: "Flights from Riyadh to Doha", href: "#" },
    { label: "Flights from Riyadh to Mumbai", href: "#" },
    { label: "Flights from Riyadh to Kuala Lumpur", href: "#" },
    { label: "Flights from Riyadh to Abu Dhabi", href: "#" },
    { label: "Flights from Riyadh to Dhaka", href: "#" },
    { label: "Flights from Riyadh to New Delhi", href: "#" },
    { label: "Flights from Riyadh to Bahrain", href: "#" },
  ];

  const otherCities = [
    { label: "Flights from Dubai", href: "#" },
    { label: "Flights from Jeddah", href: "#" },
    { label: "Flights from Doha", href: "#" },
    { label: "Flights from Abu Dhabi", href: "#" },
    { label: "Flights from Dammam", href: "#" },
    { label: "Flights from Kuwait City", href: "#" },
    { label: "Flights from Bahrain", href: "#" },
    { label: "Flights from Madinah", href: "#" },
    { label: "Flights from Baghdad", href: "#" },
    { label: "Flights from Sharjah", href: "#" },
  ];

  const toRiyadh = [{ label: "Flights to Riyadh", href: "#" }];

  const getTabContent = () => {
    switch (activeTab) {
      case "popular":
        return popularDestinations;
      case "otherCities":
        return otherCities;
      case "toRiyadh":
        return toRiyadh;
      default:
        return [];
    }
  };

  return (
    <section className=" mt-8 bg-white dark:bg-[#202124]">
      <div className=" text-2xl font-medium text-black dark:text-[#e8eaed]">
        Search more flights
      </div>
      <h3 className="mt-8 text-xl font-bold text-black dark:text-[#e8eaed] mb-2">
        More places to fly
      </h3>
      <div>
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`py-2 px-4 text-sm font-medium hover:bg-[#26282D] ${
                activeTab === tab.id
                  ? "text-[#8ab4f8] border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-[#e8eaed]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getTabContent().map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-normal hover:text-[#aecbfa] text-[#8ab4f8]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorePlaces;
