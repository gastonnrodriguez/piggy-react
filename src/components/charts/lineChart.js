import React from "react";
import { Line } from "@ant-design/charts";

const LineChart = () => {
  /* const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getTransactions();
  }, []);
  const url = "https://piggy-srv.herokuapp.com/api/v1/transactions";
  const getTransactions = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTransactions(data.data);
  };
  //console.log("chart>" + transactions); */
  const data = [
    { fecha: "1/12/2020", gasto: 900 },
    { fecha: "4/12/2020", gasto: 150 },
    { fecha: "8/12/2020", gasto: 4000 },
    { fecha: "9/12/2020", gasto: 250 },
    { fecha: "13/12/2020", gasto: 30 },
    { fecha: "15/12/2020", gasto: 900 },
    { fecha: "17/12/2020", gasto: 105 },
    { fecha: "20/12/2020", gasto: 46 },
    { fecha: "22/12/2020", gasto: 25 },
    { fecha: "25/12/2020", gasto: 344 },
    { fecha: "27/12/2020", gasto: 93 },
    { fecha: "28/12/2020", gasto: 165 },
    { fecha: "29/12/2020", gasto: 450 },
    { fecha: "30/12/2020", gasto: 25 },
    { fecha: "31/12/2020", gasto: 3 },
  ];

  const config = {
    data,
    title: {
      visible: true,
      text: "Gastos por dia",
    },
    xField: "fecha",
    yField: "gasto",
    color: "blue",
    point: {
      visible: true,
      size: 5,
      shape: "circle",
      style: {
        fill: "white",
        stroke: "blurede",
        lineWidth: 2,
      },
    },
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
};

export default LineChart;
