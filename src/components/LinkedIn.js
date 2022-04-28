import React, { useState } from "react";
import pic from "./login_edit.png";
import classes_pic from "./Picture.module.css";
import WModal from "../components/modals/WModal";
import LModal from "../components/modals/LModal";
import { mailprop } from "../components/RegisterForm.js";
import { db } from "../firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";


function LinkedIn() {
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

    console.log(event.target.id);
    if (c_clicks === 3) {
      openWHandler();
    }

    //console.log(event.target.id);
    //console.log(c_clicks + "correct clicks");
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
        id="brandname"
        className={classes_pic.brandname_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div
        id="url"
        className={classes_pic.url_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div
        id="logo"
        className={classes_pic.logo_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div
        id="subtitle"
        className={classes_pic.subtitle_1}
        onClick={(event) => CorrectClick(event)}
      />
      <div>{showWModal && <WModal />}</div>
      <div>{showLModal && <LModal />}</div>
    </div>
  );
}
export default LinkedIn;
