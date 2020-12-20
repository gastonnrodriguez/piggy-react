import "./table.css";
import React from "react";
import { Table, Tag, Space, Popconfirm, Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const DataTable = ({
  showUpdate,
  confirm,
  cancel,
  handleOkUpdate,
  handleCancelUpdate,
  transactions,
  loading,
}) => {
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
      title: "Accion",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Estas seguro?"
            onConfirm={() => {
              confirm(record);
            }}
            onCancel={cancel}
            okText="Si"
            cancelText="No"
          >
            <Button type="link">
              <DeleteOutlined />
            </Button>
          </Popconfirm>
          <Button type="link"  onClick={() => {
              showUpdate(record);
            }} >
            <EditOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={transactions} loading={loading} />
    </div>
  );
};

export default DataTable;
