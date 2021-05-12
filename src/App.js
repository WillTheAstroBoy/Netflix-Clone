import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import Browse from "./pages/browse";
import useAuthListener from "./hooks/use-auth-listener";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";

export default function App(){
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <ProtectedRoute user={user} path="/browse">
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect user={user} loggedInPath={"/browse"} path="/signin">
           <SignIn />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={"/browse"} path="/signup">
            <Signup />
          </IsUserRedirect>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  )
}