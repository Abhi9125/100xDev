import express from "express";
import { WebSocketServer, WebSocket } from "ws";

const app = express();
app.get("/", (req, res) => {
  res.send("hello world");
});

//Connect to the http port
const httpServer = app.listen(8080);

// Connect to http with websocket
const wss = new WebSocketServer({ server: httpServer });

//Check the connection
wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  //
  ws.on("message", function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
    console.log("receive : %s", data);
  });
});
