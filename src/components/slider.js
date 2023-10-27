
import React, { useState } from "react";
import { Carousel, Image } from 'antd';
import { styles } from "../styles/styles";
import { IMAGES } from "../assets/IMAGES.jsx";
import Meta from "antd/es/card/Meta";
import Typewriter from "./typingEffect";
import { text1, text2, text3 } from "./common/data";
function SliderView(props) {
    
    
      const [current,setCurrent]=useState(text1)
    //   setTimeout(() => {
    //     setCurrent("")
    //     setCurrent("RReact JS")
    //   }, 3000);
      setInterval(() => {
        if(current===text1){
            setCurrent(text2)    
        }else if(current===text2){
            setCurrent(text3)
        }else{
            setCurrent('none')
        }
      }, 4000);
  return (
    <div>
      <div style={styles.contentStyle}>
        <Meta
                                    avatar={
                                        <Image.PreviewGroup>
                                            <Image
                                                style={styles.devIcon}
                                                src={IMAGES.CODE_IMG}
                                            />
                                        </Image.PreviewGroup>
                                    }
                                    title={'Dev icon'}
                                /> 
                                <Typewriter CustomStyles={styles.typingStyle} speed={150} text= {current=='none'?"":current}/>
      </div>

    
    </div>
  );
}

export default SliderView;
