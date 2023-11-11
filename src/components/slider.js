import React, { useState } from 'react'
import { Image } from 'antd'
import Meta from 'antd/es/card/Meta'

// File Imports
import { styles } from '../styles/styles'
import { IMAGES } from '../assets/IMAGES.jsx'
import Typewriter from './typingEffect'
import { text1, text2, text3 } from './common/data'
import { COLORS } from './common/Colors'
import '../styles/App.css'
function SliderView({ props }) {
    const [current, setCurrent] = useState(text1)

    setInterval(() => {
        if (current === text1) {
            setCurrent(text2)
        } else if (current === text2) {
            setCurrent(text3)
        } else {
            setCurrent('none')
        }
    }, 4000)
    return (
        <div
            style={{
                ...styles.contentStyle,
                background: props.isDM ? COLORS.DARK : COLORS.YELLOW_BG,
            }}
        >
            <Meta
                avatar={
                    <Image.PreviewGroup>
                        <Image
                            style={styles.devIcon}
                            src={
                                props.isDM ? IMAGES.LIGHT_IMG : IMAGES.DARK_IMG
                            }
                        />
                    </Image.PreviewGroup>
                }
            />
            <h3
                style={{
                    ...styles.nameTitle,
                    color: props.isDM ? COLORS.LIGHT_IMG : COLORS.DARK,
                }}
            >
                HARIS PATEL
            </h3>
            <Typewriter
                CustomStyles={{
                    ...styles.typingStyle,
                    color: props.isDM ? COLORS.LIGHT_IMG : COLORS.DARK,
                }}
                speed={150}
                text={current == 'none' ? '' : current}
            />
        </div>
    )
}

export default SliderView
