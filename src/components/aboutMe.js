import React, { useState } from 'react'
import { Avatar, Button, Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import { EyeOutlined } from '@ant-design/icons'

import { IMAGES } from '../assets/IMAGES'
import { COLORS } from './common/Colors'
import Dots from './common/dots'
import { profileData } from './common/data'

function About({ props }) {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 1000)
    return (
        <div
            className="page-section"
            style={{ background: props.isDM ? COLORS.SECONDARY : COLORS.WHITE }}
        >
            <p
                className="page-title"
                style={{ color: props.isDM ? COLORS.WHITE : COLORS.DARK }}
            >
                About Me
            </p>
            <div className="row">
                <Row>
                    <Col xs={20} sm={14} xl={6} lg={6}>
                        {loading ? (
                            <Card style={{ width: 300 }} loading={loading}
                            >
                                <Meta
                                    avatar={
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                    }
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Card>
                        ) : (
                            <Card
                                hoverable
                                style={{
                                    backgroundColor: props.isDM
                                        ? COLORS.GREY
                                        : COLORS.TRANSPARENT,
                                }}
                                cover={
                                    <img
                                        alt="example"
                                        src={IMAGES.HSP_PROFILE}
                                    />
                                }
                            >
                                <Row>
                                    <img
                                        alt="example"
                                        src={IMAGES.REACT_LOGO}
                                        className="skills-logo"
                                    />

                                    <img
                                        alt="example"
                                        src={IMAGES.PHP_LOGO}
                                        className="skills-logo"
                                    />

                                    <img
                                        alt="example"
                                        src={IMAGES.NODE_LOGO}
                                        className="skills-logo"
                                    />
                                </Row>
                            </Card>
                        )}
                    </Col>
                    <Col span={2}></Col>
                    <Col xs={20} xl={16} lg={12} className="details-card">
                        <Card
                            hoverable
                            type="inner"
                            bordered
                            style={{
                                backgroundColor: props.isDM
                                    ? COLORS.PROJECT_BG
                                    : COLORS.TRANSPARENT,
                            }}
                            extra={<Dots />}
                        >
                            <p className="details-text">
                                I'm Haris Patel, a frontend developer with over 3 years of experience. I also have a strong background in graphics designing and video creation & editing.
                                </p>
                                <p className="details-text">
                                Throughout my career in web development, I've worked with various technologies and honed multiple skills. I specialize in building responsive websites, enhancing user experiences, and integrating cutting-edge technologies to deliver top-notch projects.
                                </p>
                                <p className="details-text">
                                I excel in video designing, where I bring concepts to life with dynamic visuals and compelling storytelling. I create engaging content such as whiteboard animations and promotional videos.
                                </p>
                                <p className="details-text">
                                I am proficient in both front-end and back-end technologies, and I am passionate about staying updated with the latest web development and Mobile application development trends to continually enhance my skills.

                            </p>
                            <Button
                                target="_blank"
                                href={profileData.driveLink}
                                // href="https://drive.google.com/file/d/1y8MhBX32sfdiw496Wr3dgo9jOXeaFQdP/view?usp=drive_link"
                                type="default"
                                shape="round"
                                icon={<EyeOutlined />}
                                size={30}
                                className="resume-btn"
                            >
                                View Resume
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About
