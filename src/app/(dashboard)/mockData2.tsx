import { Flex } from "antd";
import Image from "next/image";

export const mockData2: any = [
  {
    id: "1",
    name: (
      <Flex align="center" gap={10}>
        <div className=" w-8">
          <Image src="/xmr.png" alt="Example image" width={24} height={300} />
        </div>
        <p>XMR</p>
      </Flex>
    ),
    status: "0",
    start_date: "2025-01-15T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    token: 0.23424,
  },
  {
    id: "2",
    name: (
      <Flex align="center" gap={20}>
        <Image src="/eth.png" alt="Example image" width={24} height={300} />
        <p>ETH</p>
      </Flex>
    ),
    status: "0",
    start_date: "2025-01-15T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    token: 0.0142843,
  },
  {
    id: "2",
    name: (
      <Flex align="center" gap={20}>
        <Image src="/firo.png" alt="Example image" width={24} height={300} />
        <p>Firo</p>
      </Flex>
    ),
    status: "0",
    start_date: "2025-01-15T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    token: 3.21242,
  },
];
