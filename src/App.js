import { Route, Switch } from "react-router-dom";
import Register from "./pages/Register.js";
import Homepage from "./pages/Homepage";
import Analytics from "./pages/Analytics";
import MainNavigation from "./components/layout/MainNavigation";
import Quizpage from "./pages/Quizpage.js";
import CookieConsent from "react-cookie-consent";
import LinkedIn_page from "./pages/LinkedIn_page";
import { useState, useEffect } from "react";
import axios from "axios";
import Explanation1 from "./pages/Explanation1.js";
import PayPal_page from "./pages/PayPal_page";
import Explanation2 from "./pages/Explanation2";

function App() {
  //localhost:3000/register --> path
  const [ip, setIP] = useState("");
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

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
        <LinkedIn_page />
      </Route>
      <Route path="/Explanation">
        <Explanation1 />
      </Route>
      <Route path="/Game2">
        <PayPal_page/>
      </Route>
      {/* <h2 style={{ color: "white" }}>Your IP Address is</h2>
      <h2 style={{ color: "white" }}>{ip}</h2> */}

      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="ConsentCookie"
        style={{ background: "#333333" }}
        //buttonStyle={{ color: "#999999", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>
          Please click here for more information
        </span>
      </CookieConsent>
    </div>
  );
}

export default App;
