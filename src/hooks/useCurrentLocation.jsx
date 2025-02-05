import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeviceLocation } from "../redux/reducers/ducks/FlightDuck";

const useCurrentLocation = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { deviceLocation } = useSelector(({ flight }) => ({
    deviceLocation: flight?.deviceLocation,
  }));

  useEffect(() => {
    if (!deviceLocation) {
      const getCurrentLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              // setLocation({ latitude, longitude });
              dispatch(setDeviceLocation({ latitude, longitude }));

              fetchCityFromCoordinates(latitude, longitude);
            },
            (err) => {
              setError(err.message);
              setLoading(false);
            }
          );
        } else {
          setError("Geolocation is not supported by this browser.");
          setLoading(false);
        }
      };

      const fetchCityFromCoordinates = async (latitude, longitude) => {
        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=92e4a12d0a55455dbc3b331474232c4e`
          );
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const city =
              data.results[0].components.city ||
              data.results[0].components.town;
            const country = data.results[0].components.country;

            // setLocation((prevLocation) => ({
            //   ...prevLocation,
            //   city,
            //   country,
            // }));
            dispatch(
              setDeviceLocation({
                ...deviceLocation,
                city,
                country,
              })
            );
          } else {
            setError("City not found.");
          }
        } catch (err) {
          setError("Error fetching location details.");
        } finally {
          setLoading(false);
        }
      };

      getCurrentLocation();
    }
  }, [dispatch, deviceLocation]);

  return { location: deviceLocation, error, loading };
};

export default useCurrentLocation;
