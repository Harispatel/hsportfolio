import React from "react";
import { Html5Outlined} from '@ant-design/icons';
import { Col, Row, Tooltip } from "antd";

// Common Imports
import { COLORS } from "./common/Colors";
import { SkillsList } from "./common/data";


function Skills(props) {
    
  return (
  <div className="skills-section" style={{background:props.isDM?COLORS.PROJECT_BG:COLORS.PROJECT_BG}}>
        <p className="page-title" style={{color:props.isDM?COLORS.WHITE:COLORS.WHITE,paddingTop:'10%'}}>Skills</p>
    <Row style={{textAlign:'center'}}>
        {SkillsList?.map((data,key) =>{ 
        return(
            <Tooltip key={key} placement="top" title={data.title} arrow={true}>
        <Col  xs={7} xl={2} lg={2} className="skill-container">
        {data.key=='3'?<Html5Outlined className="skills-icon icon-container" style={{ fontSize: '12vh', color: COLORS.WHITE }}/>: <img alt="skills-set" src={data.image} className="skills-icon icon-container"/>}
                    <p className="skill-title">{data.title}</p>
                </Col>
                    </Tooltip>
        )})}
    </Row>
  </div>
  );
}

export default Skills;
