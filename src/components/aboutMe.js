import React, { useState } from 'react'
import { Avatar, Button, Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import { EyeOutlined } from '@ant-design/icons'

import '../styles/App.css'
import { IMAGES } from '../assets/IMAGES'
import { COLORS } from './common/Colors'
import Dots from './common/dots'

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
                            <Card style={{ width: 300 }} loading={loading}>
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
                                    ? COLORS.GREY
                                    : COLORS.TRANSPARENT,
                            }}
                            extra={<Dots />}
                        >
                            <p className="details-text">
                                Experienced web developer with over 3+ years of
                                expertise in designing and developing visually
                                appealing, user-centric websites and
                                applications. Proficient in front-end and
                                back-end technologies, Passionate about staying
                                updated with the latest web development trends
                                and continuously enhancing skills.
                            </p>
                            <Button
                                target="_blank"
                                href="https://drive.google.com/file/d/1y8MhBX32sfdiw496Wr3dgo9jOXeaFQdP/view?usp=drive_link"
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
