import { useGlobalContext } from "../../context";
import "./styles.css";

const Dropdown = () => {
  const { cityNameList, setSelectedCity } = useGlobalContext();

  return (
    <>
      <select id="dropdown" onChange={(e) => setSelectedCity(e.target.value)}>
        {cityNameList.map((city, index) => {
          return (
            <option key={index} value={city}>
              {city}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
