import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
const Doughnut= () => {
  var data = [
    {
      type: 'Supermercado',
      value: 27,
    },
    {
      type: 'Auto',
      value: 25,
    },
    {
      type: 'Gastos fjos',
      value: 18,
    },
    {
      type: 'Otros',
      value: 15,
    },
    {
      type: 'Tarjeta de credito',
      value: 10,
    },
    {
      type: 'Impuestos',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
   
    label: {
      type: 'inner',
      offset: '-50%',
      style: { textAlign: 'center' },
      autoRotate: false,
      content: '{value}',
    },
    interactions: [
      { type: 'element-selected' },
      { type: 'element-active' },
      { type: 'pie-statistic-active' },
    ],
  };
  return <Pie {...config} />;
};
export default Doughnut;