import { Steps } from 'antd'
import React from 'react'
import { LoadingOutlined ,CheckCircleOutlined} from '@ant-design/icons'
import { COLORS } from './Colors'

function ExperienceDetails({ props }) {
    return (
        <Steps
            current={4}
            percent={0}
            items={[
                {
                    title: <span>Phenom Sys n Services</span>,
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (3 Months)
                        </span>
                    ),
                    icon: (
                        <CheckCircleOutlined
                            className="loading-icon"
                            style={{
                                color: props?.isDM
                                    ? COLORS.WHITE
                                    : COLORS.SKY_BLUE,
                            }}
                        />
                    ),
                    description: (
                        <span
                            className="expr-desc"
                            style={{
                                color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                            }}
                        >
                            Worked as Intern in Website Designing
                        </span>
                    ),
                },
                {
                    title: 'Digital Belagavi',
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (05/01/2019 - 21/11/2020)
                        </span>
                    ),
                    icon: (
                        <CheckCircleOutlined
                            className="loading-icon"
                            style={{
                                color: props?.isDM
                                    ? COLORS.WHITE
                                    : COLORS.SKY_BLUE,
                            }}
                        />
                    ),
                    description: (
                        <span
                            className="expr-desc"
                            style={{
                                color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                            }}
                        >
                            Administrator & Graphics Designer.
                        </span>
                    ),
                },
                {
                    title: 'Belgaumonline.com',
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (1 Year)
                        </span>
                    ),
                    icon: (
                        <CheckCircleOutlined
                            className="loading-icon"
                            style={{
                                color: props?.isDM
                                    ? COLORS.WHITE
                                    : COLORS.SKY_BLUE,
                            }}
                        />
                    ),
                    description: (
                        <span
                            className="expr-desc"
                            style={{
                                color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                            }}
                        >
                            Website Designer & Developer.
                        </span>
                    ),
                },
                {
                    title: 'Mantiqh Technologies',
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (08/2021 - 21/11/2022)
                        </span>
                    ),
                    icon: (
                        <CheckCircleOutlined
                            className="loading-icon"
                            style={{
                                color: props?.isDM
                                    ? COLORS.WHITE
                                    : COLORS.SKY_BLUE,
                            }}
                        />
                    ),
                    description: (
                        <span
                            className="expr-desc"
                            style={{
                                color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                            }}
                        >
                            Junior Mobile Application Developer.
                        </span>
                    ),
                },
                {
                    title: 'Al Rabeeh Medical Center',
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (1/12/2022 - Present)
                        </span>
                    ),
                    icon: (
                        <LoadingOutlined
                            className="loading-icon"
                            style={{
                                color: props?.isDM
                                    ? COLORS.WHITE
                                    : COLORS.SKY_BLUE,
                            }}
                        />
                    ),
                    description: (
                        <span
                            className="expr-desc"
                            style={{
                                color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                            }}
                        >
                            Web Application Developer & IT Admin.
                        </span>
                    ),
                },
            ]}
        />
    )
}

export default ExperienceDetails
