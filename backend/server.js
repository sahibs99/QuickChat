const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } }, { wsEngine: "ws" });
const PORT = process.env.PORT || 5000;
const users = {};

app.use(cors());

app.get("/", (req, res) => {
  res.send("App is working!");
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }) => {
    console.log(
      `Hi there, the server received the user ${name} with the SocketID: ${socket.id} and is in room: ${room}`
    );
    users[socket.id] = { name, room };
    socket.emit("message", {
      user: "admin",
      message: `${users[socket.id].name}, Welcome to the ${
        users[socket.id].room
      } room!`,
    });

    socket.broadcast.to(users[socket.id].room).emit("message", {
      user: "admin",
      message: `${users[socket.id].name}, has joined!`,
    });

    socket.join(users[socket.id].room);
  });

  socket.on("client-message", (message) => {
    const user = users[socket.id];
    io.to(user.room).emit("message", { user: user.name, message: message });
    console.log("Received client message!");
  });

  socket.on("disconnect", () => {
    var name = users[socket.id].name;
    var room = users[socket.id].room;
    delete users[socket.id];
    io.to(room).emit("message", {
      user: "admin",
      message: `${name} has left the room`,
    });
    console.log("Socket has been disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server has started on port 5000");
});
