import Wrap from "./ui/Wrap";
import classes from "./RegisterForm.module.css";
import { useRef } from "react";
import {db} from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 

function RegisterForm() {
  const nameref = useRef();
  const emailref = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameref.current.value;
    const enteredEmail = emailref.current.value;

    // const formData = {
    //   name: enteredName,
    //   email: enteredEmail,
    // };

    const docRef = addDoc(collection(db, "Register"), {
      name: enteredName,
      email: enteredEmail
    });
    

    //console.log("hello");
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
          <button>Submit</button>
        </div>
      </form>
    </Wrap>
  );
}

export default RegisterForm;
