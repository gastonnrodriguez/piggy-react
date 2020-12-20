import React from 'react';
import { Bar } from '@ant-design/charts';
const BarChart = () => {
  var data = [
    {
      month: 'Enero',
      value: 38,
    },
    {
      month: 'Febrero',
      value: 52,
    },
    {
      month: 'Marzo',
      value: 61,
    },
    {
      month: 'Abril',
      value: 145,
    },
    {
      month: 'Mayo',
      value: 48,
    },
    {
        month: 'Junio',
        value: 38,
      },
      {
        month: 'Julio',
        value: 52,
      },
      {
        month: 'Agosto',
        value: 61,
      },
      {
        month: 'Setiembre',
        value: 145,
      },
      {
        month: 'Octubre',
        value: 48,
      },
      {
        month: 'Noviembre',
        value: 145,
      },
      {
        month: 'Diciembre',
        value: 48,
      },
  ];
  var config = {
    data: data,
    xField: 'value',
    yField: 'month',
    seriesField: 'month',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};
export default BarChart;