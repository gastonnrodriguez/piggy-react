import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Row, Col } from "antd";
import {
  TagsOutlined,
  SettingOutlined,
  BarChartOutlined,
  BellOutlined,
  UserOutlined,
  TableOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
import Management from "../management/management";
import MenuItem from "antd/lib/menu/MenuItem";
import Categories from "../categories/categories";
import Reports from "../reports/reports";
import Config from '../config/config'
//const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Menu
                theme="dark"
                mode="horizontal"
                style={{ textAlign: "right" }}
              >
                <MenuItem>
                  <BellOutlined />
                </MenuItem>
                <MenuItem>
                  <UserOutlined />
                </MenuItem>
              </Menu>
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
              <Menu.Item key="1" icon={<TableOutlined />}>
                <Link to="/dashboard">Gestion</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<TagsOutlined />}>
                <Link to="/dashboard/categories">Categorias</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<BarChartOutlined />}>
                <Link to="/dashboard/reports">Reportes</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<SettingOutlined />}>
                <Link to="/dashboard/config">Configuracion</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path="/dashboard">
                  <Management />
                </Route>
                <Route path="/dashboard/categories">
                  <Categories />
                </Route>
                <Route path="/dashboard/reports">
                  <Reports />
                </Route>
                <Route path="/dashboard/config">
                  <Config/>
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
