import React from 'react'
import {
    Form,
    Button,
    Select,
    Switch,
  } from 'antd';
const Config = () => {
    return (
        <div>
         <Form>
             <Form.Item label="Tema oscuro">
                <Switch/>
             </Form.Item>
             <Form.Item label="Decimales">
             <Switch/>
             </Form.Item>
             <Form.Item label="Formato fecha">
                 <Select>
                     <Select.Option>DD:MM:YYYY</Select.Option>
                     <Select.Option>DD:MM:YY</Select.Option>
                     <Select.Option>YYYY:MM:DD</Select.Option>
                 </Select>
             </Form.Item>
             <Form.Item>
                 <Button type="primary">Enviar</Button>
             </Form.Item>
        </Form>   
        </div>
    )
}

export default Config
