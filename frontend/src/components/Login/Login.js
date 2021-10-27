import React, { useContext, useState } from "react";
import "./Login.css";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import app from "../../fireBaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../AuthContext";
import { Redirect } from "react-router-dom";

const Login = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { email, password } = event.target.elements;
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
    history.push("/join");
  };

  const currentUser = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/join" />;
  }

  return (
    <div className="main-container">
      <div className="form-div">
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Card>
          <Card.Body>
            <Form onSubmit={login}>
              <Form.Group className="m-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  required
                ></Form.Control>
              </Form.Group>
              <Button type="submit" className="m-2">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      {loading && (
        <Spinner className="m-4" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Login;
