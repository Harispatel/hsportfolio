import { Col, Row, Timeline } from 'antd'
import React from 'react'
import { COLORS } from './common/Colors'
import '../styles/App.css'
import { experienceItems } from './common/data'
// import { experienceItems } from './common/data'
function Experience({ props }) {
    return (
        <div
            className="exprnc-container"
            style={{
                backgroundColor: props.isDM ? COLORS.DARK : COLORS.WHITE,
            }}
        >
            <Row>
                <Col xs={20} sm={14} xl={8} lg={10}></Col>
                <Col xs={20} sm={14} xl={6} lg={6}>
                    <p
                        className="exprnc-title"
                        style={{
                            color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                        }}
                    >
                        Experience
                    </p>
                    <Timeline
                    reverse
                        className="exprnc-timeline"
                        mode="alternate"
                        items={experienceItems}
                    />
                    
                </Col>
            </Row>
        </div>
    )
}

export default Experience
