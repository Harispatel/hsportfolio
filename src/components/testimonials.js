import { Avatar, Card, Carousel, Col, Rate, Row } from 'antd'
import React from 'react'
import {
    UserOutlined,
    ArrowRightOutlined,
    ArrowLeftOutlined,
} from '@ant-design/icons'

import { COLORS } from './common/Colors'
import Dots from './common/dots'
import { Testimonial } from './common/data'

function Testimonials({ props }) {
    const settings = {
        nextArrow: <ArrowRightOutlined />,
        prevArrow: <ArrowLeftOutlined />,
    }
    return (
        <Card
            hoverable
            type="inner"
            title="TESTIMONIAL"
            bordered
            style={{
                backgroundColor: props.isDM ? COLORS.GREY : COLORS.TRANSPARENT,
            }}
            extra={<Dots />}
        >
            <Carousel autoplay arrows {...settings} autoplaySpeed={4000}>
                {Testimonial.map((tst, key) => {
                    return (
                        <div
                            key={key}
                            style={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Row>
                                <Avatar
                                    className="tsm-icon"
                                    shape="square"
                                    size={64}
                                    icon={<UserOutlined />}
                                />
                                <Col>
                                    <span className="ratings user-name">
                                        {tst.name}
                                        <br />
                                    </span>
                                    <Rate
                                        disabled
                                        className="ratings"
                                        defaultValue={tst.rate}
                                    />
                                    <br />
                                    <span className="ratings">
                                        {tst?.location}
                                    </span>
                                </Col>
                            </Row>
                            <p className="tsm-text">{tst?.response}</p>
                        </div>
                    )
                })}
            </Carousel>
        </Card>
    )
}

export default Testimonials
