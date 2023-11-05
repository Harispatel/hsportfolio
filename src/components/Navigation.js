import React, { useState } from 'react'
import {
    ContactsOutlined,
    InfoCircleOutlined,
    SettingOutlined,
    HomeOutlined,
    BookOutlined,
    FileImageOutlined,
} from '@ant-design/icons'
import { MenuProps } from 'antd'
import { Menu } from 'antd'

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
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a href="#" target="_blank" rel="noopener noreferrer">
                Education
            </a>
        ),
        key: 'alipay',
        icon: <BookOutlined />,
    },
    {
        label: 'Contact',
        key: 'contact',
        icon: <ContactsOutlined />,
        // disabled: true,
    },
]

const NavigationView: React.FC = () => {
    const [current, setCurrent] = useState()

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e)
        setCurrent(e.key)
    }

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default NavigationView
