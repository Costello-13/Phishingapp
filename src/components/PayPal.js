import React, { useState } from "react";
import pic from "../components/images/PayPal_mail.png";
import classes_pic from "./Picture.module.css";
import WModal from "./modals/WModal";
import LModal from "./modals/LModal";
import { mailprop } from "../components/RegisterForm.js";
import { db } from "../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";

function PayPal() {
  /////////////////////////////////////////////////////////////////
  // FIREBASE
  /////////////////////////////////////////////////////////////////
  // getDoc(doc(db, "Images", "Image1")).then((docSnap) => {console.log(docSnap)});
  /////////////////////////////////////////////////////////////////
  // MODAL HANDLERS
  /////////////////////////////////////////////////////////////////
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
    document.getElementById(event.target.id).style.pointerEvents = "none";
    document.getElementById(event.target.id).style.backgroundColor = "blue";
    //console.log(hotspot);
    if (c_clicks === 2) {
      openWHandler();
    }

  };

  const WrongClick = (event) => {
    event.preventDefault();
    //alert("Wrong");
    setWCount(w_clicks + 1);
    //console.log(w_clicks + "wrong clicks");
    if (w_clicks === 9) {
      openLHandler();
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
      <div
        id="urgency"
        className={classes_pic.urgency}
        onClick={(event) => CorrectClick(event)}
      />
      <div
        id="customer"
        className={classes_pic.customer}
        onClick={(event) => CorrectClick(event)}
      />
      <div
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
