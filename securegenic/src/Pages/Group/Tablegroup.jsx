import React from 'react'
import 'antd/dist/antd.css';
import { Button, Dropdown, Menu } from 'antd';
import { AiFillDelete } from "react-icons/ai";
import './Tablegroup.scss'
import { Table } from 'antd';

const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
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
          title: 'Sr#',
          dataIndex: 'key',
        },
        {
          title: 'Group Name',
          dataIndex: 'groupname',
          sorter: {
            compare: (a, b) => a.groupname - b.groupname,
            multiple: 3,
          },
        },
        {
          title: 'Application',
          dataIndex: 'application',
          sorter: {
            compare: (a, b) => a.application - b.application,
            multiple: 2,
          },
        },
        {
          title: 'Version',
          dataIndex: 'version',
          sorter: {
            compare: (a, b) => a.version - b.version,
            multiple: 1,
          },
        },
        {
          title: 'Status',
          dataIndex: 'status',
          sorter: {
            compare: (a, b) => a.status - b.status,
            multiple: 1,
          },
        },
        {
          title: 'Date',
          dataIndex: 'date',
          sorter: {
            compare: (a, b) => a.date - b.date,
            multiple: 1,
          },
        },
        {
          title: 'Action',
          dataIndex: 'action',
          sorter: {
            compare: (a, b) => a.action - b.action,
            multiple: 1,
          },
        },
      ];
      const data = [
        {
          key: '1',
          groupname: 'Osama',
          application: 'Aepl',
          version:'0.0.5',
         status: 'show',
         date: '15-08-2022 04:18',
         action:<AiFillDelete/>
    
        },
      
      ];
      
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
  return (
    <div> <Table columns={columns} dataSource={data} onChange={onChange} />
    
    
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottom" arrow>
      <Button>bottom</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <Button>bottomRight</Button>
    </Dropdown>
    <br />
    <Dropdown overlay={menu} placement="topLeft" arrow>
      <Button>topLeft</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="top" arrow>
      <Button>top</Button>
    </Dropdown>
    <Dropdown overlay={menu} placement="topRight" arrow>
      <Button>topRight</Button>
    </Dropdown>
    
    </div>
  )
}

export default Tablegroup