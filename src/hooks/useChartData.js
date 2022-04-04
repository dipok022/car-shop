import { useEffect, useState } from "react";

const useChartData = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return [chart, setChart];
};

export default useChartData;
