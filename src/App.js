import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import CreatorPage from "./Pages/CreatorPage";
function App() {
  return (
    <header className="App-header">
      <Switch className="App">
        <Route path="/creator" component={CreatorPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </header>
  );
}

export default App;
