import React, { useState } from "react";
import "./Register.css";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../fireBaseConfig";

const Register = ({ history }) => {
  const [loading, setLoading] = useState(false);

  const signUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { name, email, password } = event.target.elements;
    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      ).then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name.value;
      });
      setLoading(false);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="main-container">
      <div className="form-div">
        <h1 style={{ textAlign: "center" }}>Sign Up Here!</h1>
        <Card>
          <Card.Body>
            <Form onSubmit={signUp}>
              <Form.Group className="m-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                ></Form.Control>
              </Form.Group>
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
                Register
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

export default Register;
