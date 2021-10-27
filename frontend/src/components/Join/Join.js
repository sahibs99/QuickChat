import React, { useState } from "react";
import "./Join.css";
import app from "../../fireBaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Join = () => {
  const auth = getAuth(app);
  const [input, setInput] = useState("");

  const logoutHandler = () => {
    console.log("Signing Out!");
    signOut(auth);
  };

  return (
    <>
      <div className="logout">
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
      <div className="main-container">
        <Card>
          <Card.Header>Enter in a room to start talking</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="m-2">
                <Form.Label>Room</Form.Label>
                <Form.Control
                  name="room"
                  type="text"
                  placeholder="example: dogs"
                  required
                  onChange={(e) => setInput(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Link to={`/chat/${input}`}>
                <Button type="submit" className="m-2">
                  Start Chatting
                </Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Join;
