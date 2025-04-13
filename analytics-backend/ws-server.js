const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 4001 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  const sendMockData = () => {
    const mockData = {
      timestamp: new Date().toISOString(),
      active_users: Math.floor(Math.random() * 100),
      page_views: Math.floor(Math.random() * 200),
      avg_session_duration: (Math.random() * 5 + 1).toFixed(2),
    };
    ws.send(JSON.stringify(mockData));
  };

  const interval = setInterval(sendMockData, 3000);

  ws.on("close", () => {
    clearInterval(interval);
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:4001");
