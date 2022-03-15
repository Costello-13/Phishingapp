import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import img from "./EY.png"

function MainNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}>
            <img className={classes.image} src={img} />
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Register">Register</Link>
                </li>
                <li>
                    <Link to="/Analytics">Analytics</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;