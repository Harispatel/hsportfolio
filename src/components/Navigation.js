import React, { useState } from 'react';
// import './index.css';
import { ContactsOutlined, InfoCircleOutlined, SettingOutlined, HomeOutlined,BookOutlined,FileImageOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
      <a href="/" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <a href="/resume" rel="noopener noreferrer">
        Resume
      </a>
    ),
    key: 'app',
    icon: <InfoCircleOutlined />,
  },
  {
    label: (
      <a href="/portfolio" rel="noopener noreferrer">
        Portfolio
      </a>
    ),
    key: 'SubMenu',
    icon: <FileImageOutlined />,
    // children: [
    //   {
    //     type: 'group',
    //     label: 'Item 1',
    //     children: [
    //       {
    //         label: 'Option 1',
    //         key: 'setting:1',
    //       },
    //       {
    //         label: 'Option 2',
    //         key: 'setting:2',
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Item 2',
    //     children: [
    //       {
    //         label: 'Option 3',
    //         key: 'setting:3',
    //       },
    //       {
    //         label: 'Option 4',
    //         key: 'setting:4',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    label: (
      <a href="/skills" rel="noopener noreferrer">
        Skills
      </a>
    ),
    key: 'skill',
    icon: <SettingOutlined />,
    // disabled: true,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Education
      </a>
    ),
    key: 'alipay',
    icon:<BookOutlined/>,
  },
  {
    label: 'Contact',
    key: 'contact',
    icon: <ContactsOutlined />,
    // disabled: true,
  },
];

const NavigationView: React.FC = () => {
  const [current, setCurrent] = useState();

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default NavigationView;