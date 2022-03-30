import { Route, Switch } from "react-router-dom";
import Register from "./pages/Register.js";
import Homepage from "./pages/Homepage";
import Analytics from "./pages/Analytics";
import MainNavigation from "./components/layout/MainNavigation";
import Quizpage from "./pages/Quizpage.js";
import CookieConsent from "react-cookie-consent";
import Gamepage from "./pages/Gamepage";

function App() {
  //localhost:3000/register --> path
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Analytics">
          <Analytics />
        </Route>
      </Switch>
      <Route path="/Quiz">
        <Quizpage />
      </Route>
      <Route path="/Game">
        <Gamepage/>
      </Route>

      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="ConsentCookie"
        style={{ background: "#333333" }}
        //buttonStyle={{ color: "#999999", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>Please click here for more information</span>
      </CookieConsent>
    </div>
  );
}

export default App;
