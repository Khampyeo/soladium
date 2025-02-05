import { Flex } from "antd";
import Image from "next/image";

export const mockData: any = [
  {
    id: "1",
    name: (
      <Flex align="center" gap={20}>
        <div className="bg-white w-28 px-2">
          <Image src="/dawn.webp" alt="Example image" width={90} height={300} />
        </div>
      </Flex>
    ),
    status: "0",
    start_date: "2025-01-15T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    point: 19526,
  },
  {
    id: "2",
    name: (
      <Flex align="center" gap={20}>
        <Image src="/grass.png" alt="Example image" width={80} height={300} />
      </Flex>
    ),
    status: "0",
    start_date: "2025-01-15T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    point: 20085,
  },
  {
    id: "3",
    name: (
      <Flex align="center" gap={20}>
        <div className="bg-white w-28 py-1 px-2">
          <Image
            src="/nodepay.png"
            alt="Example image"
            width={100}
            height={300}
          />
        </div>
      </Flex>
    ),
    status: "0",
    start_date: "2025-01-15T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    point: 15402,
  },
  {
    id: "4",
    name: (
      <Flex align="center" gap={2}>
        <div className="w-10">
          <Image
            src="/mygate.svg"
            alt="Example image"
            width={80}
            height={300}
          />
        </div>
        <p>My Gate</p>
      </Flex>
    ),
    status: "1",
    start_date: "2025-01-21T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    point: 80,
  },
  {
    id: "5",
    name: (
      <Flex align="center" gap={20}>
        <Image
          src="/openloop.png"
          alt="Example image"
          width={100}
          height={300}
        />
      </Flex>
    ),
    status: "1",
    start_date: "2025-01-21T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    point: 1845,
  },
  {
    id: "6",
    name: (
      <Flex align="center" gap={20}>
        <Image src="/toogle.svg" alt="Example image" width={80} height={300} />
      </Flex>
    ),
    status: "1",
    start_date: "2025-01-21T10:30:00Z",
    expiry_date: "2024-07-15T10:30:00Z",
    point: 1081,
  },
];
