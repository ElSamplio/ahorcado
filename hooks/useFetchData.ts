import { gameData } from "@/assets/data/FixedData";

const useFetchData = (key: string) => {
  let dataSet = null;
  if (key === "animales" || key === "lugares" || key === "alimentos") {
    dataSet = gameData[key];
  }
  return { dataSet };
};

export default useFetchData;
