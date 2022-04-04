import { Link } from "react-router-dom";

function WModal(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Congrats! You found them all!</p>
      <Link to="/">
        <button className="button" onClick={confirmHandler}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default WModal;
