import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/"); //webSoket is the part of the browser like fetch,
    socket.onopen = () => {
      //open the connection
      console.log("Connected");
      setSocket(socket); //update here bcz update the socket only when the webSocket is connected
    };

    socket.onmessage = (message) => {
      // receive the data front the server
      console.log("Received message", message.data);
      setLatestMessage(message.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return <div>loading....</div>;
  }
  return (
    <>
      <input onChange={(e) => setInputMessage(e.target.value)}></input>
      {/* Send data fron the frontend or client */}
      <button onClick={() => socket.send(inputMessage)}>Send</button>
      <h1>hello</h1>
      <div>{latestMessage} </div>
    </>
  );
}

export default App;
