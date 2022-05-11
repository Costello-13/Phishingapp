import { mailprop } from "../components/RegisterForm";
import { Link } from "react-router-dom";

function Introduction(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <container>
      <div>
        <br />
        <div className="introcard">
          <h1>Introduction</h1>
          <p>
            Thank you for visiting this application to learn more about the vast
            world of phishing and how to defend yourself against it.
            <br /> <br /> First, you will have to answer multiple questions
            about phishing to test your knowledge. The results of this quiz will
            only be announced at the very end of this exercise.
            <br /> <br /> During the next part, you will be shown several
            pictures which contain a number of phishing indicators. It is up to
            you to try and find them all. With each picture, you get 10 chances
            to correctly identify the indicators. After too many mistakes or
            when you have found all the indicators, the game will be over. You
            will be directed to a new page where all the indicators are
            thoroughly explained. <br /> <br /> Finally, you will be asked to
            fill in the quiz a second time after which your results of both
            quizzes will be shown.{" "}
          </p>
          <br />
          <Link to="/Pre_Quiz">
            <button className="button" onClick={confirmHandler}>
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </container>
  );
}

export { mailprop };
export default Introduction;
