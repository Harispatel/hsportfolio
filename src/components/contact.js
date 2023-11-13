import { Col, Flex, Row } from 'antd'
import React from 'react'
import {
    LinkedinOutlined,
    MailOutlined,
    WhatsAppOutlined,
    GithubOutlined,
} from '@ant-design/icons'

import { COLORS } from './common/Colors'
import { profileData } from './common/data'

function Contact({ props }) {
    return (
        <div
            className="contact-section"
            style={{
                background: props.isDM ? COLORS.DARK : COLORS.DARK,
            }}
        >
            <Row className="align-center">
                <Col xs={20} sm={14} xl={24} lg={20}>
                    <p
                        className="contact-title"
                        style={{
                            color: props?.isDM ? COLORS.WHITE : COLORS.WHITE,
                        }}
                    >
                        Contact
                    </p>
                </Col>
                <Flex wrap="wrap" gap="small">
                    <div>
                        <a
                            href={profileData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedinOutlined className="contact-icon-container contact-icon" />
                        </a>
                        <a
                            href={profileData.gmail}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MailOutlined className="contact-icon-container contact-icon" />
                        </a>
                        <a
                            href={profileData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsAppOutlined className="contact-icon-container contact-icon" />
                        </a>
                        <a
                            href={profileData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubOutlined className="contact-icon-container contact-icon" />
                        </a>
                    </div>
                </Flex>
            </Row>
        </div>
    )
}

export default Contact
