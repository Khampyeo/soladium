"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button, Checkbox, Divider, Flex, Form, Input } from "antd";
import { useAuth } from "@/contexts/AuthContext";
import EmailIcon from "@/../public/icons/icon_email.svg";
import LockIcon from "@/../public/icons/icon_lock.svg";
import UnlockIcon from "@/../public/icons/icon_unlock.svg";

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const { handleLogin, isFetching, errorMessage } = useAuth();

  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect");

  const login = () => {
    form
      .validateFields()
      .then(() =>
        handleLogin(
          form.getFieldValue("account"),
          form.getFieldValue("password"),
          form.getFieldValue("remember"),
          redirectPath
        )
      );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      login();
    }
  };

  return (
    <Form
      form={form}
      className="bg-background-secondary border dark:border-border w-[25rem] !p-8 flex flex-col items-center shadow-lg rounded-lg"
      layout="vertical"
    >
      <h1 className="text-[2rem] leading-8 font-bold">Welcome!</h1>

      <Divider className="!mb-0" />
      <div className="relative mt-4 w-full">
        <p className="my-2 mx-0 font-medium">Email</p>
        <Form.Item
          name="account"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              max: 100,
              message: "Cannot exceed 100 characters",
            },
          ]}
        >
          <Input
            size="large"
            maxLength={100}
            placeholder="Enter email or username"
            suffix={<EmailIcon />}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
        </Form.Item>
        <p className="my-2 mx-0 font-medium">Password</p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              max: 100,
              message: "Cannot exceed 100 characters",
            },
          ]}
        >
          <Input.Password
            size="large"
            type="password"
            maxLength={100}
            placeholder="Enter password"
            iconRender={(visible: boolean) =>
              visible ? <UnlockIcon /> : <LockIcon />
            }
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
          />
        </Form.Item>

        <Flex justify="space-between" align="center">
          <Form.Item
            name="remember"
            valuePropName="checked"
            className="font-medium !m-0"
          >
            <Checkbox defaultChecked={false}>Remember me</Checkbox>
          </Form.Item>
          <Link className="" href={"/auth/forgot-password"}>
            Forgot password ?
          </Link>
        </Flex>
      </div>
      {errorMessage && (
        <Flex
          justify="center"
          align="center"
          className="mt-4 h-12 bg-red-200 dark:bg-red-400 w-full text-red-600 dark:text-red-950 font-medium p-4 border border-red-600"
        >
          {errorMessage}
        </Flex>
      )}
      <Button
        size="large"
        className="mt-8 w-full"
        type="primary"
        onClick={() => login()}
        loading={isFetching}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
