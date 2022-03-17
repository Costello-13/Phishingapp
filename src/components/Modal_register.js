import { Link } from "react-router-dom";

function Modal_register(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  function cancelHandler() {
    props.onCancel();
  }
  return (
    <div className="modal">
      <p>
        It seems you have already participated in this game.
      </p>
      <Link to="/">
        <button className="button" onClick={confirmHandler}>
          Home
        </button>
      </Link>
    </div>
  );
}

export default Modal_register;
