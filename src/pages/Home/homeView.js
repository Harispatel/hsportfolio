import React from "react";
import NavigationView from "../../components/Navigation";
import SliderView from "../../components/slider";
import About from "../../components/aboutMe";
import Projects from "../../components/projects";
import Skills from "../../components/skills";

function HomeView({props}) {
  return (
    <div>
      <SliderView props={props}/>
      <About props={props}/>
      <Skills props={props}/> 
      {/* <Projects props={props}/> */}
    </div>
  );
}

export default HomeView;
