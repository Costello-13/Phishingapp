import { Link } from "react-router-dom";

function win1(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Congrats! You found them all!</p>
      <Link to={props.text}>
        <button className="button" onClick={confirmHandler}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default win1;
