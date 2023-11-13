import { Col, Row } from 'antd'
import React from 'react'

import { COLORS } from './common/Colors'
import ExperienceDetails from './common/ExperienceDetails'

function Experience({ props }) {
    return (
        <div
            className="page-section"
            style={{
                background: props.isDM ? COLORS.SECONDARY : COLORS.LIGHT_BG,
            }}
        >
            <Row>
                {/* <Col xs={20} sm={14} xl={8} lg={10}></Col> */}
                <Col xs={20} sm={14} xl={24} lg={20}>
                    <p
                        className="exprnc-title"
                        style={{
                            color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                        }}
                    >
                        Experience
                    </p>
                </Col>
                <ExperienceDetails props={props}/>
                
            </Row>
        </div>
    )
}

export default Experience
