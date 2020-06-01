import React from "react";
import { Button, Card, Input, Form } from "antd";
import { useHistory } from "react-router-dom";
import css from "./styles/main.module.less";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Login() {
  let history = useHistory();
  const [form] = Form.useForm();

  const login = () => {
    form.getFieldsError();
    window.console.log(form.getFieldsError());
    history.push("/home");
  };

  return (
    <div className={css.loginMain}>
      <Card title={"登录"} className={css.loginContent}>
        <Form form={form} onFinish={login}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input
              placeholder={"请输入用户名"}
              addonBefore={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              placeholder={"请输入密码"}
              addonBefore={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button className={css.loginButton} htmlType="submit">
              {"登录"}
            </Button>
          </Form.Item>
        </Form>
        {/* <Button
          className={"login-button"}
          onClick={login}
        >
          {"登录"}
        </Button> */}
      </Card>
    </div>
  );
}
