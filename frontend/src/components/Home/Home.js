import React, { useContext } from "react";
import "./Home.css";
import { Link, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../AuthContext";

const Home = () => {
  const currentUser = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="join" />;
  }

  return (
    <div className="main">
      <div className="text-div">
        <h1>
          Welcome to QuickChat <i class="fas fa-comments"></i>
        </h1>
      </div>
      <div className="card-div">
        <h3>Just log in and start chatting</h3>
        <div className="button-div">
          <Link to="/register">
            <Button>Sign Up </Button>
          </Link>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
