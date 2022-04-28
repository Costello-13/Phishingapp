import { Link } from "react-router-dom";

function win2(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Congrats! You found them all!</p>
      <Link to="/Explanation2">
        <button className="button" onClick={confirmHandler}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default win2;
