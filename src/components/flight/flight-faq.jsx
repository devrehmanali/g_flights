import { useState } from "react";

const FlightFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the best airline to fly from Riyadh?",
      answer: (
        <>
          What counts as the best airline for your flights from Riyadh really
          depends on your individual needs. You may have a favorite carrier or a
          loyalty program you like, but price, convenience, and airports served
          also come into play. Flexibility and booking terms – Can you change
          flights if you want to stay longer or get a refund if you have to
          postpone your trip? – are also factors that help determine which
          airline is best to fly from Riyadh.
          <br />
          <br />
          In terms of direct flights, Saudia is the most popular, flying
          directly to 59 cities. Saudia flies from King Khalid International
          Airport (RUH).
          <br />
          <br />
          Other popular airlines flying from Riyadh are Flynas, Flyadeal, Air
          India Express, Pakistan International Airlines, IndiGo.
          <ul className="list-disc pl-6 mt-2">
            <li>
              Flynas flies directly to 32 cities. Flynas flies from King Khalid
              International Airport (RUH).
            </li>
            <li>
              Flyadeal flies directly to 13 cities. Flyadeal flies from King
              Khalid International Airport (RUH).
            </li>
            <li>
              Air India Express flies directly to 5 cities. Air India Express
              flies from King Khalid International Airport (RUH).
            </li>
            <li>
              Pakistan International Airlines flies directly to 3 cities.
              Pakistan International Airlines flies from King Khalid
              International Airport (RUH).
            </li>
            <li>
              IndiGo flies directly to 3 cities. IndiGo flies from King Khalid
              International Airport (RUH).
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Which cities have direct flights from Riyadh?",
      answer: (
        <ul className="list-disc pl-6">
          <li>
            Saudia offers direct flights from Riyadh to 59 cities. The most
            frequent destinations are: Jeddah, Dammam, Dubai, Abha and Madinah.
          </li>
          <li>
            Flynas offers direct flights from Riyadh to 32 cities. The most
            frequent destinations are: Jeddah, Dubai, Cairo, Dammam and Abha.
          </li>
          <li>
            Flyadeal offers direct flights from Riyadh to 13 cities. The most
            frequent destinations are: Jeddah, Abha, Dubai, Madinah and Jazan.
          </li>
          <li>
            Air India Express offers direct flights from Riyadh to 5 cities. The
            most frequent destinations are: Kozhikode, Hyderabad, Kochi, Kannur
            and Thiruvananthapuram.
          </li>
          <li>
            Pakistan International Airlines offers direct flights from Riyadh to
            3 cities. The most frequent destinations are: Islamabad, Lahore and
            Multan.
          </li>
          <li>
            IndiGo offers direct flights from Riyadh to 3 cities. The most
            frequent destinations are: New Delhi, Mumbai and Hyderabad.
          </li>
        </ul>
      ),
    },
    {
      question: "What are some good flight destinations from Riyadh?",
      answer:
        "Some popular flight destinations from Riyadh are Jeddah, London, Cairo, Dubai, Dammam and İstanbul. To find more cheap flights to other destinations, use the Explore tool by interacting with the map above.",
    },
    {
      question: "What is the best airport to fly out of Riyadh?",
      answer:
        "Riyadh is served by only one major airport: King Khalid International Airport, 27 km away from the city center.",
    },
    {
      question:
        "How long before a flight should I arrive at the airport in Riyadh?",
      answer:
        "It's usually recommended that you arrive at the airport 2 hours before departure time for a domestic flight and 3 hours before an international flight to allow for time to check in, clear security, and handle unexpected delays. Check with your airline for any unique guidance and monitor the airport's website for updates or changes to procedures.",
    },
    {
      question: "How can I find last-minute flight deals from Riyadh?",
      answer:
        "Finding last-minute flights from Riyadh is easy on Google Flights. Select a destination in the form on the top of the page, and use the calendar to pick travel dates and find the lowest fares available. You can even check for flights departing today. To find the cheapest fares, it’s usually best to book at least a few weeks in advance for domestic flights and a few months in advance for international travel.",
    },
    {
      question: "What is the cheapest place to fly from Riyadh?",
      answer:
        "You can find cheap flight deals from Riyadh to anywhere in the world on Google Flights. Just enter Riyadh as your departure city, choose Anywhere as the destination, and tap Explore. You can pick specific dates or leave departure and return dates blank if your plans are flexible. The cheapest fares to popular destinations will appear. You can filter the results to see only nonstop flights or flights under a certain price to more easily plan your perfect budget trip. If you already have a destination in mind, you can turn on price tracking to get alerts if the fare changes for a route or flight.",
    },
  ];

  return (
    <section className="mt-9 bg-white dark:bg-[#202124]">
      <div className="mb-2">
        <h2 className="text-xl font-medium text-black dark:text-[#e8eaed]">
          Frequently asked questions about flying from Riyadh
        </h2>
      </div>
      <div className="">
        {faqs.map((faq, index) => (
          <div
            onClick={() => toggleAnswer(index)}
            key={index}
            className={`${index > 0 && "border-t border-[#5f6368"} py-4 `}
          >
            <div className="w-full bg-white dark:bg-[#202124] flex justify-between items-center text-left text-base font-medium text-black dark:text-[#e8eaed] focus:outline-none">
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openIndex === index && (
              <p className="mt-2 max-w-2xl text-base font-medium text-black dark:text-[#bdc1c6]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlightFAQ;
