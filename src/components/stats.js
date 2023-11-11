import React, { useState } from 'react'
import { Avatar, Card, Col, Image, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import {
    LinkedinOutlined,
    GitlabOutlined,
    GithubOutlined,
} from '@ant-design/icons'

import { COLORS } from './common/Colors'
import Testimonials from './testimonials'
import { styles } from '../styles/styles'
import { profileData } from './common/data'

function Stats({ props }) {
    const [loadingStats, setLoadingStats] = useState(true)
    setTimeout(() => {
        setLoadingStats(false)
    }, 1000)
    return (
        <div
            className="exprnc-container page-section"
            style={{
                backgroundColor: props.isDM ? COLORS.DARK : COLORS.WHITE,
            }}
        >
            <p
                className="page-title"
                style={{
                    color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                }}
            >
                Statistics & Details
            </p>
            <Row gutter={5}>
                <Col xs={30} sm={6} xl={6} lg={6} style={styles.mb_50}>
                    {loadingStats ? (
                        <Card style={{ width: '30%' }} loading={loadingStats}>
                            <Meta
                                avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                }
                                title="Card title"
                                description="This is the description"
                            />
                        </Card>
                    ) : (
                        <a
                            href="https://app.daily.dev/harispatel62"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-readonly
                                alt="Haris's Dev Card"
                                width={'100%'}
                                src="https://api.daily.dev/devcards/c575f0a2f4ba41998c6460fd55594fbf.png?r=wxa"
                            />
                        </a>
                    )}
                </Col>
                <Col xs={30} sm={17} xl={9} lg={10} className="tsm-container">
                    <Testimonials props={props} />
                </Col>
                <Col xs={30} sm={10} xl={6} lg={6} style={styles.mb_50}>
                    {loadingStats ? (
                        <Card style={{ width: 300 }} loading={loadingStats}>
                            <Meta
                                avatar={<Avatar src={profileData.loader} />}
                            />
                        </Card>
                    ) : (
                        <>
                            <Card
                                style={{ width: 250 }}
                                cover={
                                    <img alt="cover" src={profileData.cover} />
                                }
                                actions={[
                                    <a
                                        href={profileData.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Linkedin"
                                    >
                                        <LinkedinOutlined key="linkedin" />
                                    </a>,
                                    <a
                                        href={profileData.gitlab}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Gitlab"
                                    >
                                        <GitlabOutlined key="gitlab" />
                                    </a>,
                                    <a
                                        href={profileData.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Github"
                                    >
                                        <GithubOutlined key="github" />
                                    </a>,
                                ]}
                            >
                                <a
                                    href={profileData.fiverr}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Meta
                                        avatar={
                                            <Avatar src={profileData.img} />
                                        }
                                        title="harispatel62"
                                        // description=""
                                    />
                                </a>
                            </Card>
                        </>
                    )}
                </Col>
            </Row>
        </div>
    )
}

export default Stats
