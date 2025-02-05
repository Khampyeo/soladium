import { Button, Dropdown, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import Status from "@/app/components/status/Status";
import RenderContent from "@/app/components/TextEllipsis/TextEllipsis";
import ListIcon from "@/../public/icons/icon_3dots.svg";
import { formatDateTime } from "@/utils/time-formating";

type Props = {
  onEditClick: (record: any) => void;
  onDeleteClick: (record: any) => void;
};

export const columnConfig2 = ({ onEditClick, onDeleteClick }: Props) => {
  const columns: ColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "id",
      width: 40,
      ellipsis: {
        showTitle: false,
      },
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: "Crypto",
      dataIndex: "name",
      width: 240,
      render: (item) => <RenderContent text={item} />,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 100,
      render: (status) => <Status status={Number(status)} />,
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      width: 100,
      render: (date) => formatDateTime(date),
    },
    {
      title: "Token",
      dataIndex: "token",
      width: 103,
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      fixed: "right",
      width: 60,
      render: (_, record) => (
        <div className="flex gap-5 justify-center">
          <Dropdown
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: record.status == "0" ? "stop" : "start",
                  danger: true,
                  label: "Stop",
                },
                {
                  key: "delete",
                  danger: true,
                  label: "Delete",
                },
              ],
            }}
            trigger={["click"]}
          >
            <Button type="text" size="small" icon={<ListIcon />}></Button>
          </Dropdown>
        </div>
      ),
    },
  ];
  return columns;
};
