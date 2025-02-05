import Link from "next/link";
import { Flex, Select } from "antd";

export default function PageNotFound() {
  return (
    <Flex
      justify="center"
      align="center"
      className="h-dvh w-screen bg-background-primary"
    >
      <Flex align="center" gap={40} vertical className="p-10">
        <h1 className="font-bold text-7xl">404</h1>
        <h2 className="text-2xl">Sorry, we were unable to find that page</h2>
        <Select
          showSearch
          className="w-80"
          placeholder="Search"
          optionFilterProp="label"
          size="large"
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
          ]}
        />
        <p className="text-base">
          Start from&nbsp;
          <Link href={"/"} className="text-primary-color">
            home page
          </Link>
        </p>
      </Flex>
    </Flex>
  );
}
