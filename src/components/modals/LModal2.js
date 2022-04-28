import { Link } from "react-router-dom";

function lose2(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>WRONG!</p>
      <Link to="/Explanation2">
        <button className="button" onClick={confirmHandler}>
          Next
        </button>
      </Link>
    </div>
  );
}

export default lose2;
