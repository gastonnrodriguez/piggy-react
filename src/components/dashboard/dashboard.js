import React from "react";
import { Layout, Menu, Button, Avatar, Image } from "antd";
import {    
  DashboardOutlined,
  TagsOutlined,
  SettingOutlined,
  BarChartOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined
} from "@ant-design/icons";
import "./dashboard.css";
import Table from "../table/table";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />   
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />       
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
                Dashboard
              </Menu.Item>
              <Menu.Item key="2" icon={<TagsOutlined />}>
                Categorias
              </Menu.Item>
              <Menu.Item key="3" icon={<BarChartOutlined />}>
                Reportes
              </Menu.Item>
              <Menu.Item key="4" icon={<SettingOutlined />}>
                Configuracion
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Button type='primary' danger><MinusCircleOutlined /> Nuevo gasto</Button>
            <Button type='dashed' success style={{background: "#73d13d"}}><PlusCircleOutlined /> Nuevo ingreso</Button>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Table />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
