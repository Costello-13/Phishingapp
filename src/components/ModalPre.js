import { Link } from "react-router-dom";

function ModalPre(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>
        Your score has been recorded. Please continue to start the game.
      </p>
      <Link to="/Game">
        <button className="button" onClick={confirmHandler}>
          Continue
        </button>
      </Link>
    </div>
  );
}

export default ModalPre;
