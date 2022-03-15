import { Link } from "react-router-dom";
function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  function cancelHandler() {
    props.onCancel();
  }
  return (
    <div className="modal">
      <p>
        Welcome to the phishing game, where you can test your knowledge about
        phishing. In order to participate in this game, you need to enter your
        name and email. <br /> <br /> NOTE: you can only take part once in this
        game. Your results will be anonymized and only used for educational
        purposes. By clicking the proceed button, you agree to the processing of
        your data.
      </p>
      <button className="button" onClick={cancelHandler}>
        Cancel
      </button>
      <Link to="/Register">
        <button className="button" onClick={confirmHandler}>
          Proceed
        </button>
      </Link>
    </div>
  );
}

export default Modal;
