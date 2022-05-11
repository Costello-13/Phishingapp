import { Link } from "react-router-dom";

function LModal(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Too bad, you didn't find them all!</p>
      <Link to={props.text}>
        <button className="button" onClick={confirmHandler}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default LModal;
