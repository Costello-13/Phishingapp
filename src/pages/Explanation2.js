import Table_2 from "../components/Table_2";
import { Link } from "react-router-dom";
import {mailprop} from "./PayPal_page";

function Explanation2(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <container>
      <div>
        <h1> Explanation 2 </h1>
        <Table_2 />
        <br />
        <div className="content_center">
          <Link to="/Post_Quiz">
            <button className="button" onClick={confirmHandler}>Next</button>
          </Link>
        </div>
      </div>
    </container>
  );
}
export {mailprop};
export default Explanation2;
