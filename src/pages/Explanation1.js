import Table_Explanation from "../components/Table_Explanation";
import { Link } from "react-router-dom";


function Explanation1(props) {
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <container>
      <div>
        <h1> Explanation </h1>
        <Table_Explanation />
        <br />
        <div className="content_center">
          <Link to="/">
            <button className="button" onClick={confirmHandler}>Next</button>
          </Link>
        </div>
      </div>
    </container>
  );
}

export default Explanation1;
