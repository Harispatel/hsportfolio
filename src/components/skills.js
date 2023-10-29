import React from "react";
import { COLORS } from "./common/Colors";
import { Col, Row, Tooltip } from "antd";
import { IMAGES } from "../assets/IMAGES";
import { SkillsList } from "./common/data";


function Skills(props) {
    
  return (
  <div className="project-section" style={{background:props.isDM?COLORS.PROJECT_BG:COLORS.PROJECT_BG}}>
        <p className="page-title" style={{color:props.isDM?COLORS.WHITE:COLORS.WHITE}}>Skills</p>
    <Row style={{textAlign:'center'}}>
        {SkillsList?.map((data,key) =>{ 
        return(
            <Tooltip placement="top" title={data.title} arrow={true}>
        <Col key={key} xs={8} xl={2} lg={2} className="skill-container">
                    <img alt="skills-set" src={data.image} className="skills-icon icon-container"/>
                    <p className="skill-title">{data.title}</p>
                </Col>
                    </Tooltip>
        )})}
    </Row>
  </div>
  );
}

export default Skills;
