import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import WeatherBox from "../WeatherBox";
import "./styles.css";

const ForecastRow = () => {
  const { weatherForecast } = useGlobalContext();

  if (!weatherForecast) return <Loading />;

  const { daily } = weatherForecast;

  return (
    <div className="container">
      {daily.map((day, index) => {
        if (index !== 7) {
          return <WeatherBox key={index} day={day} index={index} />;
        }
      })}
    </div>
  );
};

export default ForecastRow;
