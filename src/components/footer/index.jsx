import { useState } from "react";

const Footer = () => {
  const [isInternationalSitesOpen, setIsInternationalSitesOpen] =
    useState(false);
  const [isExploreFlightsOpen, setIsExploreFlightsOpen] = useState(false);

  const toggleInternationalSites = () => {
    setIsInternationalSitesOpen(!isInternationalSitesOpen);
  };

  const toggleExploreFlights = () => {
    setIsExploreFlightsOpen(!isExploreFlightsOpen);
  };

  return (
    <footer className=" bg-white dark:bg-[#202124] p-6 mt-6 border-t border-[#5f6368]">
      <div className="max-w-7xl mx-auto">
        {/* Language, Location, and Currency Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm font-normal">
          <div className="flex items-center hover:bg-[#25272D] text-[#8ab4f8] bg-[#202124] border border-[#5f6368] rounded-full px-4 py-2 ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#5f6368"
              className="mr-2"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path>
            </svg>
            <span>Language</span>
            <span className="mx-1">.</span>
            <span className="ml-2 ">English (United States)</span>
          </div>
          <div className="flex items-center hover:bg-[#25272D] text-[#8ab4f8] bg-[#202124] px-4 py-2 border border-[#5f6368] rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#5f6368"
              className="mr-2"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
              <circle cx="12" cy="9" r="2.5"></circle>
            </svg>
            <span>Location</span>
            <span className="mx-1">.</span>
            <span className="ml-2 ">Saudi Arabia</span>
          </div>
          <div className="flex items-center hover:bg-[#25272D] text-[#8ab4f8] bg-[#202124] px-4 py-2 border border-[#5f6368] rounded-full ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#5f6368"
              className="mr-2"
            >
              <g>
                <rect fill="none" width="24" height="24"></rect>
              </g>
              <g>
                <g>
                  <circle cx="12" cy="12" r="3"></circle>
                  <polygon points="6.5,9.5 9,9.5 9,8 5,8 5,12 6.5,12"></polygon>
                  <polygon points="15,16 19,16 19,12 17.5,12 17.5,14.5 15,14.5"></polygon>
                  <path d="M20,5H4C2.9,5,2,5.9,2,7v10c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,17H4V7h16V17z"></path>
                </g>
              </g>
            </svg>
            <span>Currency</span>
            <span className="mx-1">.</span>
            <span className="ml-2 ">SAR</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center text-sm text-[#9aa0a6] mt-2 mb-7">
          <p>
            Current language and currency options applied: English (United
            States) - Saudi Arabia - SAR
          </p>
          <p>
            Displayed currencies may differ from the currencies used to purchase
            flights.{" "}
            <a
              href="https://www.google.com/googlefinance/disclaimer?hl=en-US&gl=SA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Learn more
            </a>
          </p>
          <p className="max-w-5xl py-4">
            Prices are final prices and include all taxes and fees, including
            payment fees for the cheapest common payment method (which may
            differ depending on the provider). Additional charges may apply for
            other types of payment, luggage, meals, WLAN or other additional
            services. Prices, availability and travel details are provided based
            on the latest information received from our partners. This
            information is reflected in the results within a period of less than
            24 hours. Additional conditions may also be applied by our partners.
            You should then check prices and conditions with the services
            providers before booking.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-[#8ab4f8] mb-6">
          <a
            href="https://about.google/?hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            About
          </a>
          <a
            href="https://policies.google.com/privacy?hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms?hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Terms
          </a>
          <a
            href="https://google.qualtrics.com/jfe/form/SV_3NMIMtX0F2zkakR?reserved%3D1%26utm_source%3DFooter%2520link%26utm_medium%3Down_web%26%20utm_campaign%3DQ2%26productTag%3D0%26campaignDate%3DApril2020%26referral_code%3DUXbJ377133&Q_Language=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Join user studies
          </a>
          <a href="./#0" className="hover:underline">
            Feedback
          </a>
          <a
            href="https://support.google.com/travel/?hl=en-US#topic=2475360"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Help Center
          </a>
        </div>

        {/* International Sites Dropdown */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-[#8ab4f8]">
          <div className="mb-6">
            <div
              className="flex items-center text-sm text-[#8ab4f8]"
              onClick={toggleInternationalSites}
            >
              <span className="text-[#8ab4f8]">International sites</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`ml-2 transform transition-transform ${
                  isInternationalSitesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z"></path>
              </svg>
            </div>
            {isInternationalSitesOpen && (
              <div className="mt-2 space-y-2">
                <a
                  href="https://www.google.com/travel/flights?gl=US&hl=en-US"
                  className="block text-sm text-[#8ab4f8]"
                >
                  Google Flights - United States (en-US)
                </a>
                <a
                  href="https://www.google.com/travel/flights?gl=BR&hl=pt-BR"
                  className="block text-sm text-[#8ab4f8]"
                >
                  Google Voos - Brasil (pt-BR)
                </a>
                <a
                  href="https://www.google.com/travel/flights?gl=CA&hl=en"
                  className="block text-sm text-[#8ab4f8]"
                >
                  Google Flights - Canada (en)
                </a>
                <a
                  href="https://www.google.com/travel/flights?gl=GB&hl=en-GB"
                  className="block text-sm text-[#8ab4f8]"
                >
                  Google Flights - United Kingdom (en-GB)
                </a>
                <a
                  href="https://www.google.com/travel/flights?gl=IN&hl=en"
                  className="block text-sm text-[#8ab4f8]"
                >
                  Google Flights - India (en)
                </a>
              </div>
            )}
          </div>

          {/* Explore Flights Dropdown */}
          <div>
            <div
              className="flex items-center text-sm text-[#8ab4f8]"
              onClick={toggleExploreFlights}
            >
              <span className="text-[#8ab4f8]">Explore flights</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`ml-2 transform transition-transform ${
                  isExploreFlightsOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z"></path>
              </svg>
            </div>
            {isExploreFlightsOpen && (
              <div className="mt-2 space-y-2 text-[#8ab4f8]">
                <div>
                  <h4 className="text-sm font-medium">
                    Popular departures from Saudi Arabia
                  </h4>
                  <div className="mt-1 space-y-1">
                    <a
                      href="/travel/flights/flights-from-jeddah.html?gl=SA&hl=en"
                      className="block text-sm "
                    >
                      Flights from Jeddah
                    </a>
                    <a
                      href="/travel/flights/flights-from-riyadh.html?gl=SA&hl=en"
                      className="block text-sm text-[#8ab4f8]"
                    >
                      Flights from Riyadh
                    </a>
                    <a
                      href="/travel/flights/flights-from-dammam.html?gl=SA&hl=en"
                      className="block text-sm text-[#8ab4f8]"
                    >
                      Flights from Dammam
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-800">
                    Popular routes from Saudi Arabia
                  </h4>
                  <div className="mt-1 space-y-1">
                    <a
                      href="/travel/flights/flights-from-riyadh-to-jeddah.html"
                      className="block text-sm text-[#8ab4f8]"
                    >
                      Flights from Riyadh to Jeddah
                    </a>
                    <a
                      href="/travel/flights/flights-from-jeddah-to-riyadh.html"
                      className="block text-sm text-[#8ab4f8]"
                    >
                      Flights from Jeddah to Riyadh
                    </a>
                    <a
                      href="/travel/flights/flights-from-jeddah-to-cairo.html"
                      className="block text-sm text-[#8ab4f8]"
                    >
                      Flights from Jeddah to Cairo
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
