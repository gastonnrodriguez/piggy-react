import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Row, Col, PageHeader, Modal, Form, message } from "antd";
import {
  DashboardOutlined,
  TagsOutlined,
  SettingOutlined,
  BarChartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
import Table from "../table/table";
import IncomeForm from "../income/incomeForm";
import Expenseform from "../expense/expenseForm";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Dashboard = () => {

  const [form] = Form.useForm();
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    getTransactions();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    
    const values = await form.validateFields();
    values.type='e';
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

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const confirm = async (e) => {
    console.log(e);
    let request = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      
    };
    
    fetch("https://piggy-srv.herokuapp.com/api/v1/transactions/"+e._id, request)
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



    message.success('Se elimino el registro correctamente.');
    getTransactions();
  }
  
  const cancel = (e) => {
    console.log(e);
    // 
  }
    return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary">
                <BellOutlined />
              </Button>
              <Button type="default">
                <UserOutlined />
              </Button>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<TagsOutlined />}>
                <Link to="/categories">Categorias</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<BarChartOutlined />}>
                Reportes
              </Menu.Item>
              <Menu.Item key="4" icon={<SettingOutlined />}>
                Configuracion
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <PageHeader
              title="Gestion de gastos"
              extra={[
                <Button key="1" type="primary" onClick={showModal}>
                  <MinusCircleOutlined />
                  Nuevo gasto
                </Button>,
              
              ]}
            ></PageHeader>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Table confirm={confirm} cancel={cancel} transactions={transactions} loading={isLoading}/>
              <Modal
                title="Ingrese un gasto"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Expenseform form={form} />
                
              </Modal>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
