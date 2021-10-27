import React from "react";
import "./Chatbox.css";
import ScrollToBottom from "react-scroll-to-bottom";
import SingleMessage from "../SingleMessage/SingleMessage";

const Chatbox = ({ messages, name }) => {
  return (
    <ScrollToBottom className="chatbox-container">
      {messages.map((message, key) => (
        <div key={key}>
          <SingleMessage message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Chatbox;
