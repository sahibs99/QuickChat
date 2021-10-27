import React from "react";
import "./InputBar.css";
import { Button, Form } from "react-bootstrap";

const InputBar = ({ message, setMessage, sendMessage }) => {
  return (
    <Form>
      <div className="footer-container">
        <div className="input-bar-div">
          <Form.Control
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          />
        </div>
        <div className="input-button-div">
          <Button onClick={(event) => sendMessage(event)}>Send</Button>
        </div>
      </div>
    </Form>
  );
};

export default InputBar;
