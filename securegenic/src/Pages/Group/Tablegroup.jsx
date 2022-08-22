import React from "react";
import "antd/dist/antd.css";
import { Button, Dropdown, Menu } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { FaFileCsv } from "react-icons/fa";
import { GrDocumentMissing } from "react-icons/gr";
import { AiFillPrinter } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import "./Tablegroup.scss";
import { Table } from "antd";

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
            1st menu item
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
            2nd menu item
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
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const Tablegroup = () => {
  const columns = [
    {
      title: "Sr#",
      dataIndex: "key",
    },
    {
      title: "Group Name",
      dataIndex: "groupname",
      sorter: {
        compare: (a, b) => a.groupname - b.groupname,
        multiple: 3,
      },
    },
    {
      title: "Application",
      dataIndex: "application",
      sorter: {
        compare: (a, b) => a.application - b.application,
        multiple: 2,
      },
    },
    {
      title: "Version",
      dataIndex: "version",
      sorter: {
        compare: (a, b) => a.version - b.version,
        multiple: 1,
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: {
        compare: (a, b) => a.status - b.status,
        multiple: 1,
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 1,
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      sorter: {
        compare: (a, b) => a.action - b.action,
        multiple: 1,
      },
    },
  ];
  const data = [
    {
      key: "1",
      groupname: "Osama",
      application: "Aepl",
      version: "0.0.5",
      status: "show",
      date: "15-08-2022 04:18",
      action: <AiFillDelete />,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div className="main_table">


<div className="title">
        Group
        <div className="para">
          The device groups feature allows you to organize your devices into
          groups.
        </div>
      </div>
      <div className="buttons">
       
          
      Push Application Group
       

          <button>

            <FiPlusSquare /> Push Application Group
          </button>
        
      </div>

<div className="icon_content">



<div className="icons_main">
<div className="icon">

<AiFillPrinter/>
</div>
<div className="icon">

<GrDocumentMissing/>
</div>
<div className="icon">

<FaFileCsv/>
</div>
<div className="icon">

<AiFillFilePdf/>  
</div>

<div className="btn">

 <Dropdown overlay={menu} placement="bottom" arrow>
   <Button>Filter</Button>
 </Dropdown>
</div>
 
 </div>

<div className="group">
  <label>Search :</label>
  <input type='text'/>
</div>

 </div>

      <div className="table_content">
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>

    </div>
  );
};

export default Tablegroup;
