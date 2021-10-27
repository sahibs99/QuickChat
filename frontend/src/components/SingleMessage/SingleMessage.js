import React from "react";
import "./SingleMessage.css";
//import ReactEmoji from "react-emoji";

const SingleMessage = ({ message: { message, user }, name }) => {
  let isUser = false;

  if (user === name) {
    isUser = true;
  }

  return isUser ? (
    <div className="user-message-container">
      <div className="user-message-div">
        <p className="message-text">{message}</p>
      </div>
    </div>
  ) : (
    <div className="other-message-container">
      <div className="other-message-div">
        <p className="message-text">{message}</p>
      </div>
      <p className="other-user-name">{user}</p>
    </div>
  );
};

export default SingleMessage;
