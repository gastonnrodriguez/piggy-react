import React, { useEffect, useState } from "react";
import {
  Button,
  PageHeader,
  Modal,
  Form,
  message,
} from "antd";
import {
  PlusCircleOutlined,
} from "@ant-design/icons";

import Table from "../table/table";
import UpdateForm from "../updateForm/updateForm";
import Expenseform from "../expense/expenseForm";

//import MenuItem from "antd/lib/menu/MenuItem";

const Management = () => {
  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const [record, setRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://piggy-srv.herokuapp.com/api/v1/transactions";
  const getTransactions = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setTransactions(data.data);
    console.log(data);
    setIsLoading(false);
  };
  //CREATE
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = async () => {
    const values = await form.validateFields();
    //values.type = "e";
    let request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    console.log(values);
    fetch("https://piggy-srv.herokuapp.com/api/v1/transactions", request)
      .then((res) => res.json())
      .then(
        //Todo OK
        (result) => {
          console.log(result);
          getTransactions();
        },
        //Error
        (error) => {
          alert("Error al crear la transaccion");
        }
      );

    console.log("Success:", values);
    setIsModalVisible(false);
  };

  //DELETE
  const confirm = async (e) => {
    console.log(e);
    let request = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch(
      "https://piggy-srv.herokuapp.com/api/v1/transactions/" + e._id,
      request
    )
      .then((res) => res.json())
      .then(
        //Todo OK
        (result) => {
          console.log(result);
          getTransactions();
        },
        //Error
        (error) => {
          alert("Error al crear la transaccion");
        }
      );

    message.success("Se elimino el registro correctamente.");
    getTransactions();
  };

  const cancel = (e) => {
    console.log(e);
    //
  };
  //UPDATE
  const showUpdate = (record) => {
    setIsUpdateVisible(true);
    setRecord(record);
  };

  const handleOkUpdate = async () => {
    const values = await updateForm.validateFields();

    let request = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    console.log(values);
    fetch(
      `https://piggy-srv.herokuapp.com/api/v1/transactions/${record._id}`,
      request
    )
      .then((res) => res.json())
      .then(
        //Todo OK
        (result) => {
          console.log(result);
          getTransactions();
        },
        //Error
        (error) => {
          alert("Error al actualizar la transaccion");
        }
      );

    console.log("Success:", values);
    setIsModalVisible(false);

    setIsUpdateVisible(false);
  };

  const handleCancelUpdate = () => {};

  return (
    <div>
         <PageHeader
              title="Gestion de gastos"
              extra={[
                <Button key="1" type="primary" onClick={showModal}>
                  <PlusCircleOutlined />
                  Nuevo gasto
                </Button>,
              ]}
            ></PageHeader>
      <Table
        confirm={confirm}
        cancel={cancel}
        transactions={transactions}
        loading={isLoading}
        handleOkUpdate={handleOkUpdate}
        handleCancelUpdate={handleCancelUpdate}
        showUpdate={showUpdate}
      />
      <Modal
        title="Ingrese un registro"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Expenseform form={form} />
      </Modal>
      <Modal
        title="Edicion de registro"
        visible={isUpdateVisible}
        onOk={handleOkUpdate}
        onCancel={handleCancelUpdate}
      >
        <UpdateForm form={updateForm} record={record} />
      </Modal>
    </div>
  );
};

export default Management;
