import { Link } from "react-router-dom";

function ModalRegister(props) {
  function confirmHandler() {
    props.onConfirm();
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

export default ModalRegister;
