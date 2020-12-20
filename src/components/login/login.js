import React from "react";
import { Row, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
    Link
   } from "react-router-dom";
import "./login.css";
//import background from '../login/loginbg.svg';

const Login = () => {
  return (
    <Row justify="center" className="loginForm" >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: false,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: false,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="#">
            Olvide mi password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
           <Link to="/dashboard">Login</Link>
          </Button>
          
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Login;
