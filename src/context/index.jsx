import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import cities from "../data/city.json";

const AppContext = createContext();

function getCities() {
  const cityList = cities.map((city) => city.name);
  return cityList;
}

const fetchForecast = async (lat, lon) => {
  const url = `${process.env.REACT_APP_API_URL}lat=${lat}&lon=${lon}&units=metric&lang=tr&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
};

function getLatLonValues(cityName) {
  const city = cities.find((city) => city.name === cityName);
  return city;
}

function getSelectedCity() {
  return localStorage.getItem("selected-city") || "ADANA";
}

export const AppProvider = ({ children }) => {
  const [cityNameList, setCityNameList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(getSelectedCity());
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    setCityNameList(getCities());
  }, []);

  useEffect(() => {
    const { lat, lon } = getLatLonValues(selectedCity);
    (async () => {
      const forecast = await fetchForecast(lat, lon);
      setWeatherForecast(forecast);
    })();
  }, [selectedCity]);

  const values = {
    cityNameList,
    setSelectedCity,
    weatherForecast,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
