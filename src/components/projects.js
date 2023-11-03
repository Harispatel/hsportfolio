import React, { useState } from 'react'
import { COLORS } from './common/Colors'
import { Badge, Card, Col, Row } from 'antd'
import ProjectModal from './common/projectModal'
import { ProjectsData } from './common/data'
import '../styles/App.css'
import PopUp from './common/popUpMessage'

function Projects({ props, isProjecModalOpen, handleClose, handleOpen }) {
    const [selectedData, setSelectedData] = useState()
    const selectedProject = (sel) => {
        handleOpen(true)
        setSelectedData(sel)
    }
    return (
        <div
            className="project-section"
            style={{
                backgroundColor: props.isDM ? COLORS.GREY : COLORS.YELLOW_BG,
            }}
        >
            <p
                className="page-title"
                style={{ color: props.isDM ? COLORS.WHITE : COLORS.DARK }}
            >
                Worked on Projects
            </p>
            <Row gutter={16}>
                {ProjectsData.map((item, key) => {
                    return (
                        <Col key={key} xs={20} sm={14} xl={6} lg={6}>
                            <Card
                                className="project-card"
                                cover={
                                    <PopUp
                                        placement={'top'}
                                        title={'Click for Details'}
                                        arrow={true}
                                    >
                                        <img
                                            className="project-img"
                                            alt="example"
                                            src={item?.image[0]}
                                            onClick={() =>
                                                selectedProject(item)
                                            }
                                        />
                                    </PopUp>
                                }
                            >
                                <Badge
                                    className=""
                                    count={item?.year}
                                    overflowCount={99999}
                                    style={{
                                        backgroundColor: props.isDM
                                            ? COLORS.WHITE
                                            : COLORS.DARK,
                                        borderRadius: 3,
                                    }}
                                />
                                <p className="project-title">{item.name}</p>
                                <ProjectModal
                                    item={selectedData}
                                    isProjecModalOpen={isProjecModalOpen}
                                    handleClose={handleClose}
                                />
                            </Card>
                        </Col>
                    )
                })}
                {/* <Col span={8}>
            <Card>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              Card content
            </Card>
          </Col> */}
            </Row>
        </div>
    )
}

export default Projects
