import "./table.css";
import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const DataTable = (datos) => {
const [transactions, setTransactions] = useState([]);
const url = 'https://piggy-srv.herokuapp.com/api/v1/transactions';

useEffect(() => {
    getTransactions();
  }, []);

const getTransactions = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTransactions(data.data);
    console.log(data);        
  };

const columns = [
  {
    title: "Fecha",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Descripcion",
    dataIndex: "description",
    key: "description",
  },

  {
    title: "Importe",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Categoria",
    key: "category",
    dataIndex: "category",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>
          <EditOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];


  return (
    <div>
      <Table columns={columns} dataSource={transactions} title={() => 'Transacciones'} loading='TRUE' />
    </div>
  );
};

export default DataTable;
