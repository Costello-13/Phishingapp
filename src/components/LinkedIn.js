import React, { useState } from "react";
import pic from "./login_edit.png";
import classes_pic from "./Picture.module.css";
import WModal from "../components/modals/WModal";
import LModal from "../components/modals/LModal";



function LinkedIn() {
  ///////////////////////////////////////////////////////
  // MODAL FUNCTIONALITY
  //////////////////////////////////////////////////////
  const [showWModal, setShowWModal] = useState(false);
  const [showLModal, setShowLModal] = useState(false);

  let [c_clicks, setCCount] = useState(0);
  let [w_clicks, setWCount] = useState(0);

  function openWHandler() {
    setShowWModal(true);
  }
  function openLHandler() {
    setShowLModal(true);
  }
  /////////////////////////////////////////////////////////////////
  // CLICK FUNCTIONS
  /////////////////////////////////////////////////////////////////
  const CorrectClick = (event) => {
    event.preventDefault();
    //alert("Correct");
    setCCount(c_clicks + 1);
    document.getElementById(event.target.id).style.pointerEvents = "none"; // after correct click, make sure object is no longer clickable
    document.getElementById(event.target.id).style.backgroundColor = "blue"; // after correct click, remove transparency of hotspot so people know they have found an indicator

    // console.log(event.target.id);
    if (c_clicks === 3) {   // 4 Indicators in this picture (0-3), after 4 correct clicks = all found, game over
      openWHandler(); // Win_Modal will open
    }

  };

  const WrongClick = (event) => {
    event.preventDefault();
    setWCount(w_clicks + 1); // Keep track of # wrong clicks
   
    if (w_clicks === 9) { // After 10 wrong clicks = game over
      openLHandler(); // Lose_Modal will open
    }
  };

  return (
    <div className={classes_pic.parent}>
      <img // Image (LinkedIn login page)
        className={classes_pic.image}
        src={pic}
        alt="Image1"
        onClick={(event) => WrongClick(event)}
      />
      <div // Hotspot 1
        id="brandname"
        className={classes_pic.brandname_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div // Hotspot 2
        id="url"
        className={classes_pic.url_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div // Hotspot 3
        id="logo"
        className={classes_pic.logo_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div // Hotspot 4
        id="subtitle"
        className={classes_pic.subtitle_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div>{showWModal && <WModal text="/Explanation" />}</div>
      <div>{showLModal && <LModal text="Explanation" />}</div>
    </div>
  );
}
export default LinkedIn;
