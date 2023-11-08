import React from "react";
import { COLORS } from "./Colors";
function Dots(props) {
    return (
        <>
        <svg height="30" width="30">
            <circle cx="25" cy="20" r="5" fill={COLORS.GREEN} />
        </svg>
        <svg height="30" width="30">
            <circle
                cx="15"
                cy="20"
                r="5"
                fill={COLORS.WARNING}
            />
        </svg>
        <svg height="30" width="30">
            <circle cx="8" cy="20" r="5" fill={COLORS.DANGER} />
        </svg>
    </>
    );
  }
  
  export default Dots;
  