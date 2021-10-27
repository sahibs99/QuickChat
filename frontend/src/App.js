import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from "./AuthContext";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import Join from "./components/Join/Join";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/join" exact component={Join} />
          <PrivateRoute path="/chat/:room" exact component={Chat} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
