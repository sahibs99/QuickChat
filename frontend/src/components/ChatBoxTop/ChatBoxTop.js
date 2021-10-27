import React from "react";
import "./ChatBoxTop.css";
import { withRouter } from "react-router-dom";
const ChatBoxTop = ({ room, socket, history }) => {
  const clickHandler = () => {
    socket.close();
    history.push("/join");
  };

  return (
    <div>
      <div className="box-top">
        <div className="online-circle"></div>
        <div className="room-name-div">{room}</div>
        <div className="close">
          <i
            style={{ cursor: "pointer" }}
            class="fas fa-times"
            onClick={clickHandler}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ChatBoxTop);
