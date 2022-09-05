import React from "react";
import "antd/dist/antd.css";
import { Button, Dropdown, Menu } from "antd";
// import { AiFillDelete } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { FaFileCsv } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import { AiFillPrinter } from "react-icons/ai";
import { Table } from "antd";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import Heading from "../../Components/0-Atoms/Heading/Heading";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Sr#
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          > 
          Group Name 
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >PIN
          </a>
        ),
      },
      {
        key: "4",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >Last Update
          </a>
        ),
      },
      {
        key: "4",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >Action
          </a>
        ),
      },
    ]}
  />
);

const lenght = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            10
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            50
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            60
          </a>
        ),
      },
    ]}
  />
);

const Filter = () => {
  const columns = [
    {
      title: "Sr#",
      dataIndex: "key",
    },
    {
      title: "Group Name",
      dataIndex: "group",
      sorter: {
        compare: (a, b) => a.groupname - b.groupname,
        multiple: 3,
      },
    },
    {
      title: "PIN",
      dataIndex: "pin",
      sorter: {
        compare: (a, b) => a.application - b.application,
        multiple: 2,
      },
    },
    {
      title: "Last Update",
      dataIndex: "last",
      sorter: {
        compare: (a, b) => a.version - b.version,
        multiple: 1,
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 1,
      },
    },
    
  ];
  const data = [
    {
      key: "1",
      group: "901091171441BB105",
      pin: "05b9%",
      last: "02-08-2022 21:33:15",
      action: "icon",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="main_table">
      <Heading heading="Registered Devices" para="Manage all devices - Select Application / Admin mode / WiFi Profile."/>
      <div className="device_search">
        <div className="label">
          
        </div>
        <div className="search">
          <Link to="/Filter" style={{ textDecoration: "none" }}>
            <span className="menus"><FcMenu /></span>
          </Link>

        </div>
      </div>

      <div className="icon_content">
        <div className="icons_main">
        <div className="btn">
            <Dropdown overlay={lenght} placement="bottom" arrow>
              <Button>Length</Button>
            </Dropdown>
          </div>
          <div className="icon">
            <AiFillPrinter />
          </div>
          <div className="icon">
            <HiOutlineDocument />
          </div>
          <div className="icon">
            <FaFileCsv />
          </div>
          <div className="icon">
            <AiFillFilePdf />
          </div>

          <div className="btn">
            <Dropdown overlay={menu} placement="bottom" arrow>
              <Button>Filter</Button>
            </Dropdown>
          </div>
        </div>

        <div className="group">
          <label>Search :</label>
          <input type="text" />
        </div>
      </div>

      <div className="table_content">
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      Showing 1 to 1 of 1 entries
    </div>
  );
};

export default Filter


