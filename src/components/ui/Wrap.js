import classes from "./Wrap.module.css";

function Wrap(props) {
    return <div className={classes.wrap}>{props.children}</div>;
}

export default Wrap;