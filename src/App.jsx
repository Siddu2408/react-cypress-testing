import "./App.css";
import Stepper from "./components/Stepper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <Stepper />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
