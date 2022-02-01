import "./styles.css";

const WeatherBox = ({ day, index }) => {
  const weekDays = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  return (
    <div className={`weather-box ${index === 0 ? "border-green" : ""}`}>
      <h3 className="text-center" style={{ color: "white" }}>
        {weekDays[new Date(day.dt * 1000).getDay()]}
      </h3>
      <div className="img-box">
        <img
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
          alt="weather-img"
        />
      </div>
      <div style={{ color: "white" }}>{day.temp.day} &#8451;</div>
    </div>
  );
};

export default WeatherBox;
