"use client";

import { useState } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { App, Table, Tabs } from "antd";
import { mockData } from "./mockData";
import { mockData2 } from "./mockData2";
import { APP_PAGE_SIZES, DEFAULT_PARAM } from "@/constants/app";
import { columnConfig } from "./config";
import { columnConfig2 } from "./config2";

const DocumentManagement = () => {
  const { modal } = App.useApp();
  const [param, setParam] = useState<any>(DEFAULT_PARAM);

  const data: any = mockData;
  const data2: any = mockData2;

  const [documentIdSelected, setDocumentIdSelected] = useState<
    string | undefined
  >(undefined);

  const onEditClick = (record: any) => {
    setDocumentIdSelected(record.id);
  };

  const onDeleteClick = (record: any) => {
    setDocumentIdSelected(record.id);
    modal.confirm({
      title: "Are you sure delete this record?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {},
    });
  };
  const [keyTab, setKeyTab] = useState("1");
  const onChange = (key: any) => {
    setKeyTab(key);
  };
  const items = [
    {
      key: "1",
      label: "Node Running",
    },
    {
      key: "2",
      label: "Crypto Mining",
    },
  ];
  return (
    <>
      <div className="mt-5 ml-2">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        {keyTab == "1" && (
          <Table
            columns={columnConfig({
              onEditClick,
              onDeleteClick,
            })}
            dataSource={data || []}
            scroll={{
              x: 1000,
              y: 700,
            }}
            pagination={{
              current: param.current,
              pageSize: param.pageSize,
              pageSizeOptions: APP_PAGE_SIZES,
              showSizeChanger: true,
              hideOnSinglePage: true,
              total: data?.totalCount,
            }}
            onChange={(pagination) =>
              setParam({
                ...param,
                current: pagination?.current,
                pageSize: pagination?.pageSize,
              })
            }
            rowKey="id"
            size={"large"}
          />
        )}
        {keyTab == "2" && (
          <Table
            columns={columnConfig2({
              onEditClick,
              onDeleteClick,
            })}
            dataSource={data2 || []}
            scroll={{
              x: 1000,
              y: 700,
            }}
            pagination={{
              current: param.current,
              pageSize: param.pageSize,
              pageSizeOptions: APP_PAGE_SIZES,
              showSizeChanger: true,
              hideOnSinglePage: true,
              total: data?.totalCount,
            }}
            onChange={(pagination) =>
              setParam({
                ...param,
                current: pagination?.current,
                pageSize: pagination?.pageSize,
              })
            }
            rowKey="id"
            size={"large"}
          />
        )}
      </div>
    </>
  );
};
export default DocumentManagement;
