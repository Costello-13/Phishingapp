import { doc, DocumentSnapshot, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { mailprop } from "./Post_Quiz";
import { useState, useEffect } from "react";

function Results() {
  var preresults;
  var postresults
  const [prescore, setpreScore] = useState("");
  const [postscore, setpostScore] = useState("");

  getDoc(doc(db, "PreTest", mailprop)).then((docSnap) => {
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      //onsole.log(docSnap.data());
      preresults = docSnap.data();
      setpreScore(preresults.Score);
    } 
  });

  getDoc(doc(db, "PostTest", mailprop)).then((docSnap) => {
    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      //onsole.log(docSnap.data());
      postresults = docSnap.data();
      setpostScore(postresults.Score);
    } 
  });
  return (
    <div>
      <h1>Quiz results</h1>
      <h2>Your score on the first test: {prescore}</h2>
      <h2>Your score on the second test: {postscore}</h2>
    </div>
  );
}

export default Results;
