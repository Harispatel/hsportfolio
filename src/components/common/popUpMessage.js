import React from 'react'
import { Tooltip } from 'antd'

function PopUp(props) {
    return (
        <Tooltip
            key={props?.key}
            placement={props?.placement}
            title={props?.title}
            arrow={props?.arrow}
        >
            {props?.children}
        </Tooltip>
    )
}

export default PopUp
