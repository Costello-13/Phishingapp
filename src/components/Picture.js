import React, { useState } from "react";
import pic from "./login.png";
import classes from "./Picture.module.css";
function Picture() {
  //const [coord, setCoord] = useState([]);
  const handleMouseMove = (event) => {
    alert("Correct");
  };

//  if (coord[0] >= 410 && coord[0] <= 537 && coord[1] >= 168 && coord[1] <= 217){
//      alert("you clicked correct");
//  }

  return (
    <div className={classes.parent}>
        <img className={classes.image} src={pic}/>
        <div className={classes.child} onClick={(event) => handleMouseMove(event)}/>
    </div>
    
  );
}

export default Picture;
