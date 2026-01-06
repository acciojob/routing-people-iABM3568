import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
