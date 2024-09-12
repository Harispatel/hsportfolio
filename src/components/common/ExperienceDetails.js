import { Steps } from 'antd'
import React from 'react'
import { LoadingOutlined ,CheckCircleOutlined} from '@ant-design/icons'
import { COLORS } from './Colors'

function ExperienceDetails({ props }) {
    return (
        <Steps
            current={5}
            percent={5}
            items={[
                {
                    title: <span>Phenom</span>,
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
                // {
                //     title: 'Digital Belagavi',
                //     subTitle: (
                //         <span className="expr-subtl">
                //             <br />
                //             (1 yr 11 months)
                //         </span>
                //     ),
                //     icon: (
                //         <CheckCircleOutlined
                //             className="loading-icon"
                //             style={{
                //                 color: props?.isDM
                //                     ? COLORS.WHITE
                //                     : COLORS.SKY_BLUE,
                //             }}
                //         />
                //     ),
                //     description: (
                //         <span
                //             className="expr-desc"
                //             style={{
                //                 color: props?.isDM ? COLORS.WHITE : COLORS.DARK,
                //             }}
                //         >
                //             Administrator & Graphics Designer.
                //         </span>
                //     ),
                // },
                {
                    title: 'Belgaum Online',
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (1 yr, 1 month)
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
                            (1 yr 4 months)
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
                    title: 'Al Rabeeh Group',
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (1 yr 5 months)
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
                            Software Developer.
                        </span>
                    ),
                },
                {
                    title: 'Provab Technosoft',
                    subTitle: (
                        <span className="expr-subtl">
                            <br />
                            (Aug-2024 - Present)
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
                            Mobile Application Developer.
                        </span>
                    ),
                },
            ]}
        />
    )
}

export default ExperienceDetails
