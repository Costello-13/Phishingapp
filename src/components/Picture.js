import React, { useState } from "react";
import pic from "./login.png";

function Picture() {
  const [coord, setCoord] = useState([]);
  const handleMouseMove = (event) => {
    let coordinates = [event.clientX, event.clientY];
    setCoord(coordinates);
    console.log(coordinates);
  };

 if (coord[0] >= 410 && coord[0] <= 537 && coord[1] >= 168 && coord[1] <= 217){
     alert("you clicked correct");
 }




  return (
    <img src={pic} onClick={(event) => handleMouseMove(event)}/>
  );
}

export default Picture;
