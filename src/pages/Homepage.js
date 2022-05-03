import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

function Homepage() {
  const [ip, setIP] = useState("");
  const [loc, setLOC] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    setLOC(res.data.country_name);
    setLat(res.data.latitude);
    setLong(res.data.longitude);
  };
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  return (
    <container>
      <div>
        <br/>
        <div className="welcomecard">
          <h2>
            Welcome to this platform. Just by visiting this webpage, you already gave
            me some information about yourself:
          </h2>
          <h2>
            Your IP Address: <br />
            {ip}
          </h2>
          <h2>This means you are connecting somewhere from {loc}, <br/> with latitude {lat} and longitude {long}. </h2>
          <h2>Interesting, isn't it?</h2>
        </div>
        <br />
        <Card text="Want to find out more about the importance of phishing awareness?" />
      </div>
    </container>
  );
}

export default Homepage;
