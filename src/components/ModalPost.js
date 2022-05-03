import { Link } from "react-router-dom";

function ModalPost(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>
        Your score has been recorded. Please continue to view your results.
      </p>
      <Link to="/Results">
        <button className="button" onClick={confirmHandler}>
          Continue
        </button>
      </Link>
    </div>
  );
}

export default ModalPost;
