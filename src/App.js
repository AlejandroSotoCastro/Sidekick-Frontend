import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/HomePage";
import CreatorPage from "./Pages/CreatorPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import YourSidekicks from "./Pages/YourSidekicks";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    console.log("get user with token ");

    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <header className="App-header">
      <Navigation className="Navigation" />
      <MessageBox />

      {isLoading ? <Loading /> : null}
      <Switch className="App">
        <Route path="/creator" component={CreatorPage} />
        <Route path="/your-sidekicks" component={YourSidekicks} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </header>
  );
}

export default App;
