import Wrap from "./ui/Wrap";
import { useState } from "react";
import classes from "./RegisterForm.module.css";
import { useRef } from "react";
import { db } from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import Modal_register from "../components/Modal_register";

var mailprop;

function RegisterForm() {
  const [showModal, setShowModal] = useState(false);
  const nameref = useRef();
  const emailref = useRef();

  function openHandler() {
    setShowModal(true);
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameref.current.value;
    const enteredEmail = emailref.current.value;

    const formData = {
      name: enteredName,
      email: enteredEmail,
    };
    mailprop = enteredEmail;
    getDoc(doc(db, "Register", enteredEmail)).then((docSnap) => {
      if (docSnap.exists()) {
        //console.log("Document data:", docSnap.data());
        console.log("email already exists");
        openHandler();
      } else {
        setDoc(doc(db, "Register", enteredEmail), formData);
      }
    });

    // post data to firebase

    // get document from firebase

    //console.log("hello");
    console.log(showModal);
  }

  return (
    <Wrap>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Full Name</label>
          <input type="text" required id="name" ref={nameref} />
        </div>
        <div className={classes.control}>
          <label>Email</label>
          <input type="text" required id="email" ref={emailref} />
        </div>
        <div className={classes.actions}>
          {/* <Link to="/Quizpage"> */}
          <button>Submit</button>
          {/* </Link> */}
        </div>
      </form>
      <div>{showModal && <Modal_register />}</div>
    </Wrap>
  );
}
export { mailprop };
export default RegisterForm;
