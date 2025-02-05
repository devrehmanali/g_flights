import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import SearchBar from "./components/search/searchbar";
import FlightsSection from "./components/flight/flight-suggestions";
import Banner from "./components/flight/banner";
import FlightSearchCard from "./components/flight/flight-map";
import PopularFlights from "./components/flight/popular-flights";
import PopularAirports from "./components/flight/popular-airports";
import FlightFAQ from "./components/flight/flight-faq";
import MorePlaces from "./components/flight/more-places";
import Footer from "./components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getRapidAPIConfigRequest } from "./redux/reducers/ducks/FlightDuck";
import useCurrentLocation from "./hooks/useCurrentLocation";

export default function App() {
  const dispatch = useDispatch();
  const { flightConfigList } = useSelector(({ flight }) => ({
    flightConfigList: flight?.flightConfigList,
  }));
  const { location } = useCurrentLocation();

  useEffect(() => {
    dispatch(getRapidAPIConfigRequest());
  }, [dispatch]);

  useEffect(() => {
    if (location) {
      const config =
        flightConfigList &&
        flightConfigList.data &&
        flightConfigList.data.length > 0 &&
        flightConfigList.data.filter(
          (item) => item.country === location.country
        );
      // dispatch(setFlightConfigValue(config[0]));
    }
  }, [location, flightConfigList, dispatch]);

  return (
    <div className="bg-white dark:bg-[#202124] flex flex-col h-screen">
      <Header />
      <div>
        <Banner />
      </div>
      <div className="max-w-6xl mx-auto">
        <SearchBar />
        <FlightsSection />
        <FlightSearchCard />
        <PopularFlights />
        <PopularAirports />
        <FlightFAQ />
        <MorePlaces />
        <Footer />
      </div>
    </div>
  );
}
