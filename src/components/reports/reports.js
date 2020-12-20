import React from "react";
import { PageHeader } from "antd";
import LineChart from "../charts/lineChart";
import BarChart from '../charts/barChart';
import Doughnut from '../charts/doughnut';
const Reports = () => {
  return (
    <div>
      <PageHeader title="Reportes de gastos e ingresos"></PageHeader>
      <Doughnut/>
      <LineChart />
      <BarChart />
    </div>
  );
};

export default Reports;
