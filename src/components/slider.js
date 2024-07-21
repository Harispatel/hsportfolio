import React, { useState } from 'react'
import Meta from 'antd/es/card/Meta'

// File Imports
import { styles } from '../styles/styles'
import { IMAGES } from '../assets/IMAGES.jsx'
import { profileData, text1, text2, text3 } from './common/data'
import { COLORS } from './common/Colors'
import { ReactTyped } from 'react-typed'
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
                    <a href={profileData.blogspot} title='hsp dev tech blog (Open in new tab)' target='_blank' rel="noopener noreferrer">
                        <img
                            alt='logo'
                            style={styles.devIcon}
                            src={
                                props.isDM ? IMAGES.LIGHT_IMG : IMAGES.DARK_IMG
                            }
                        />
                    </a>
                }
            />
            <h2
                style={{
                    ...styles.nameTitle,
                    color: props.isDM ? COLORS.LIGHT_IMG : COLORS.DARK,
                }}
            >
                Haris Patel
            </h2>
                <h3 style={{color: props.isDM ? COLORS.LIGHT_IMG : COLORS.DARK}}>
                    {" "}
                    <ReactTyped
                        strings={[text1, text2, text3]}
                        typeSpeed={100}
                        loop
                        backSpeed={10}
                        cursorChar="|"
                        showCursor={true}
                    />
                </h3>
        </div>
    )
}

export default SliderView
