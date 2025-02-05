import { useCallback, useState } from "react";

export default function useService() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to call a service
  const callService = useCallback(async (serviceFn, ...args) => {
    setLoading(true);
    try {
      const response = await serviceFn(...args);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, callService };
}
