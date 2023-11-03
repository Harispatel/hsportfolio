import React, { useEffect, useState } from 'react'
import { Carousel, Image, Modal, Spin, Typography } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'

function ProjectModal({ item, isProjecModalOpen, handleClose }) {
    const [imageLoading, setImageLoading] = useState(true)
    const [rows, setRows] = useState(10)
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
                // centered
                open={isProjecModalOpen}
                onOk={() => handleClose()}
                onCancel={() => handleClose()}
                width={'50%'}
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
                    nextArrow={<ArrowRightOutlined color="black" />}
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
                className='mt-20'
                    ellipsis={{
                        rows,
                        expandable: true,
                    }}
                >
                    {item?.description}
                </Paragraph>
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
