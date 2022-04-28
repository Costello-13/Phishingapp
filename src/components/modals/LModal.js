import { Link } from "react-router-dom";

function lose1(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>WRONG!</p>
      <Link to="/Explanation">
        <button className="button" onClick={confirmHandler}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default lose1;
