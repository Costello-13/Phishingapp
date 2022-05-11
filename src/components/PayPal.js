import React, { useState } from "react";
import pic from "../components/images/PayPal_mail.png";
import classes_pic from "./Picture.module.css";
import WModal from "./modals/WModal";
import LModal from "./modals/LModal";


function PayPal() {
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

    if (c_clicks === 2) { // 3 Indicators in this picture (0-2), after 3 correct clicks = all found, game over
      openWHandler(); // Win_Modal will open
    }

  };

  const WrongClick = (event) => {
    event.preventDefault();
    //alert("Wrong");
    setWCount(w_clicks + 1); // Keep track of # wrong clicks

    if (w_clicks === 9) { // After 10 wrong clicks = game over
      openLHandler(); // Lose_Modal will open
    }
  };

  return (
    <div className={classes_pic.parent}>
      <img
        className={classes_pic.image}
        src={pic}
        alt="Image1"
        onClick={(event) => WrongClick(event)}
      />
      <div // Hotspot 1
        id="urgency"
        className={classes_pic.urgency}
        onClick={(event) => CorrectClick(event)}
      />
      <div // Hotspot 2
        id="customer"
        className={classes_pic.customer}
        onClick={(event) => CorrectClick(event)}
      />
      <div // Hotspot 3 
        id="logo"
        className={classes_pic.personal}
        onClick={(event) => CorrectClick(event)}
      />
      <div>{showWModal && <WModal text="/Explanation2" />}</div>
      <div>{showLModal && <LModal text="/Explanation2" />}</div>
    </div>
  );
}

export default PayPal;
