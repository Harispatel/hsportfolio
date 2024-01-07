import React, { useState } from 'react'
import { FloatButton, Tooltip } from 'antd'
import { ArrowUpOutlined, BulbFilled, BulbOutlined } from '@ant-design/icons'

// Components
import SliderView from '../../components/slider'
import About from '../../components/aboutMe'
import Projects from '../../components/projects'
import Skills from '../../components/skills'
import Stats from '../../components/stats'
import Experience from '../../components/experience'

// Styles css
import '../../styles/App.css'
import Contact from '../../components/contact'

function HomeView({ props }) {
    const [isProjecModalOpen, setProjectModalOpen] = useState(false)
    const handleClose = () => {
        setProjectModalOpen(false)
    }
    const handleOpen = () => {
        setProjectModalOpen(true)
    }
    return (
        <div>
            <FloatButton.BackTop
                className="light-dark"
                icon={<ArrowUpOutlined />}
            />
            <Tooltip
                placement="top"
                title={
                    props.isDM ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                }
                arrow={true}
            >
                <FloatButton
                    className="light-dark"
                    icon={props.isDM ? <BulbFilled /> : <BulbOutlined />}
                    onClick={props.handleClick}
                    type="default"
                    style={{ right: 84 }}
                />
            </Tooltip>
            <SliderView props={props} />
            <About props={props} />
            <Skills props={props} />
            <Projects
                props={props}
                isProjecModalOpen={isProjecModalOpen}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />
            <Stats props={props} />
            <Experience props={props} />
            <Contact props={props} />
        </div>
    )
}

export default HomeView
