import React from "react";
import { COLORS } from "./common/Colors";
function Projects(props) {
  return (
  <div className="project-section" style={{background:props.isDM?COLORS.PROJECT_BG:COLORS.PROJECT_BG}}>
        <p className="page-title" style={{color:props.isDM?COLORS.WHITE:COLORS.WHITE}}>Projects</p>
    
  </div>
  );
}

export default Projects;
