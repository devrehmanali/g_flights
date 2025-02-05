import { useState } from "react";
import { searchFlights } from "../services/flight/flightservice";

export default function useFlightSearch() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFlights = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchFlights(params);
      setFlights(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { flights, loading, error, fetchFlights };
}
