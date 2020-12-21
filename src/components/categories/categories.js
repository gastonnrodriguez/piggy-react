
import React from "react";
import { Table, Tag, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Categories = (datos) => {

  const dataSource = [
    {
      type: 'i',
      description: 'Sueldo',
      
    },
    {
      type: 'i',
      description: 'Aguinaldo',
      
    },
    {
      type: 'i',
      description: 'Bono',
      
    },
    {
      type: 'i',
      description: 'Extra',
      
    },
    {
      type: 'e',
      description: 'Supermercado',
      
    },
    ,
    {
      type: 'e',
      description: 'Gastos fijos',
      
    },
    ,
    {
      type: 'e',
      description: 'Alquiler',
      
    },
    ,
    {
      type: 'e',
      description: 'Auto',
      
    },
    ,
    {
      type: 'e',
      description: 'Tarjeta de credito',
      
    },
    ,
    {
      type: 'e',
      description: 'Otros',
      
    },
    
  ];

const columns = [
  {
    title: "Etiqueta",
    dataIndex: "type",
    key: "type",
    render: (type) => {
      let color = type === "i" ? "green" : "red";
      let tag = type === "i" ? "ingreso" : "egreso";

      return (
        <Tag color={color} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Descripcion",
    dataIndex: "description",
    key: "description",
  },

  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a href='/#'>
          <EditOutlined />
        </a>
        <a href='/#'>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];


  return (
    <div>
      <Table columns={columns} dataSource={dataSource} loading='TRUE' />
    </div>
  );
};

export default Categories;
