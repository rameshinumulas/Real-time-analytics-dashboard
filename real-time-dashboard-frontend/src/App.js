import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4001");

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setData((prev) => [...prev.slice(-9), message]);
    };

    return () => socket.close();
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>📊 Website Traffic Dashboard (WebSocket)</h1>
      <Dashboard data={data} />
    </div>
  );
}

export default App;
