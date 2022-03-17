import { Link } from "react-router-dom";

function ModalSuccess(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>
        Your registration is succesfull. <br /> Please click Next to start the
        quiz.
      </p>
      <Link to="/Quiz">
        <button className="button" onClick={confirmHandler}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default ModalSuccess;
