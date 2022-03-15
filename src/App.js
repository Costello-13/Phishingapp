import { Route, Switch } from 'react-router-dom';
import Register from "./pages/Register.js";
import Homepage from "./pages/Homepage";
import Analytics from "./pages/Analytics";
import MainNavigation from "./components/layout/MainNavigation"

function App() {
  //localhost:3000/register --> path 
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact> 
        <Homepage />
      </Route>
      <Route path='/Register'>
        <Register />
      </Route>
      <Route path='/Analytics'>
        <Analytics />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
