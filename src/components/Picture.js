import React, { useState } from "react";
import pic from "./login_edit.png";
import classes_pic from "./Picture.module.css";
import WModal from "./WModal";
import LModal from "./LModal.js";
//import { db } from "../firebase";
//import { setDoc, doc, getDoc } from "firebase/firestore";

function Picture() {
   

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
    //console.log(c_clicks + "correct clicks");
    

    if (c_clicks === 3) {
      openWHandler();
    }
  };

  const WrongClick = (event) => {
    event.preventDefault();
    //alert("Wrong");
    setWCount(w_clicks + 1);
    console.log(w_clicks + "wrong clicks");
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
        className={classes_pic.brandname}
        onClick={(event) => CorrectClick(event)}
      />
      <div
        className={classes_pic.url}
        onClick={(event) => CorrectClick(event)}
      />
      <div
        className={classes_pic.logo}
        onClick={(event) => CorrectClick(event)}
      />
      <div
        className={classes_pic.subtitle}
        onClick={(event) => CorrectClick(event)}
      />
      <div>{showWModal && <WModal />}</div>
      <div>{showLModal && <LModal />}</div>
    </div>
  );
}

export default Picture;
