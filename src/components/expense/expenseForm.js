import { Form, Input, InputNumber, Button, Select, DatePicker } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ExpenseForm = ({ form }) => {
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      form={form}
    >
      <Form.Item
        label="Tipo"
        name="type"
        rules={[
          {
            required: true,
            message: "Seleccione un tipo de entrada",
          },
        ]}
      >
        <Select>
          <Select.Option value="i">Ingreso</Select.Option>
          <Select.Option value="e">Gasto</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
      label="Fecha"
      name="createdAt"
      >
          <DatePicker/>
      </Form.Item>
      <Form.Item
        label="Descripcion"
        name="description"
        rules={[
          {
            required: true,
            message: "Ingrese una descripcion",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Categoria"
        name="category"
        rules={[
          {
            required: true,
            message: "Seleccione una categoria",
          },
        ]}
      >
        <Select>
          <Select.Option value="supermercado">Supermercado</Select.Option>
          <Select.Option value="auto">Auto</Select.Option>
          <Select.Option value="fijos">Gastos Fijos</Select.Option>
          <Select.Option value="tarjeta">Tarjeta de credito</Select.Option>
          <Select.Option value="otros">Otros</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Monto"
        name="amount"
        rules={[
          {
            required: true,
            message: "Ingrese un monto",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
    </Form>
  );
};

export default ExpenseForm;
