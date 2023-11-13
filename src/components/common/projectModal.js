import React, { useEffect, useState } from 'react'
import { Carousel, Image, Modal, Row, Spin, Typography } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { COLORS } from './Colors'

function ProjectModal({ item, isProjecModalOpen, handleClose, props }) {
    const [imageLoading, setImageLoading] = useState(true)
    const [rows] = useState(10)
    const { Paragraph } = Typography

    useEffect(() => {
        setImageLoading(true)
        setTimeout(() => {
            setImageLoading(false)
        }, 500)
    }, [])

    return (
        <div>
            <Modal
                title={item?.name}
                centered
                open={isProjecModalOpen}
                onOk={() => handleClose()}
                onCancel={() => handleClose()}
                className="modal-style"
                styles={modalStyles}
                cancelButtonProps={{
                    style: {
                        display: 'none',
                    },
                }}
                okButtonProps={{
                    style: {
                        display: 'none',
                    },
                }}
            >
                <Carousel
                    autoplay={200}
                    arrows={true}
                    nextArrow={<ArrowRightOutlined color={COLORS.BLACK} />}
                    prevArrow={<ArrowLeftOutlined />}
                >
                    {item?.image?.map((img, key) => {
                        return (
                            <div>
                                {' '}
                                {imageLoading ? (
                                    <div className="example">
                                        <Spin />
                                    </div>
                                ) : (
                                    <Image key={key} src={img} />
                                )}
                            </div>
                        )
                    })}
                </Carousel>
                <Paragraph
                    className="mt-20 description-txt"
                    ellipsis={{
                        rows,
                        expandable: true,
                    }}
                >
                    {item?.description}
                </Paragraph>

                <div className="lang-bg">
                    <Row
                        style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {item?.languages?.map((langImg, key) => {
                            return (
                                <div>
                                    <img
                                        key={key}
                                        title={langImg?.title}
                                        alt="lang-set"
                                        src={langImg?.img}
                                        className={
                                            props.isDM
                                                ? 'lang-icon'
                                                : 'lang-icon invert'
                                        }
                                    />
                                </div>
                            )
                        })}
                    </Row>
                </div>
                <p>{item?.moreDetails}</p>
            </Modal>
        </div>
    )
}
const modalStyles = {
    mask: {
        backdropFilter: 'blur(10px)',
    },
}
export default ProjectModal
