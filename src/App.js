import React, { Suspense } from "react";
import "./App.css";
import CovidMainContainer from "./components/covid/CovidMainContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import Logout from "./components/auth/Logout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Header from "./components/header/Header";

const TodoMainContainer = React.lazy(() =>
  import("./components/todo/TodoMainContainer")
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <div className="wrapper">
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/register">
                    <Registration />
                  </Route>
                  <Route exact path="/logout">
                    <Logout />
                  </Route>
                  <Route path="/todo">
                    <TodoMainContainer />
                  </Route>
                  <Route path="/">
                    <CovidMainContainer />
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
