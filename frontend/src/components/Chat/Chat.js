import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../AuthContext";
import Chatbox from "../ChatBox/Chatbox";
import ChatBoxTop from "../ChatBoxTop/ChatBoxTop";
import InputBar from "../InputBar/InputBar";
import { Card } from "react-bootstrap";
import "./Chat.css";
import { io } from "socket.io-client";
let socket;

const Chat = () => {
  const room = window.location.pathname.split("/")[2];
  const user = useContext(AuthContext);
  const name = user.email;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket = io("https://react-real-time-chat-app-be.herokuapp.com/");
    socket.emit("join", { name, room });
    return () => {
      socket.close();
    };
  }, [name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((m) => [...m, message]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("client-message", message);
    setMessage("");
  };

  return (
    <div className="chat-page-container">
      <Card className="card-style">
        <Card.Header className="card-header">
          <ChatBoxTop room={room} socket={socket} />
        </Card.Header>
        <Card.Body>
          <Chatbox messages={messages} name={name} />
        </Card.Body>
        <Card.Footer className="card-header">
          <InputBar
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Chat;
