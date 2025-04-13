import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function Dashboard({ data }) {
  if (data.length === 0) return <p>Loading...</p>;

  const latest = data[data.length - 1];

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <div style={{ flex: 1, background: "#f0f0f0", padding: "1rem", borderRadius: "12px" }}>
          <h3>👥 Active Users</h3>
          <p style={{ fontSize: "2rem" }}>{latest.active_users}</p>
        </div>

        <div style={{ flex: 1, background: "#f0f0f0", padding: "1rem", borderRadius: "12px" }}>
          <h3>⏱️ Avg Session Duration (min)</h3>
          <progress value={latest.avg_session_duration} max="6" style={{ width: "100%" }} />
          <p style={{ fontSize: "1.5rem" }}>{latest.avg_session_duration}</p>
        </div>
      </div>

      <div>
        <h3>📈 Page Views (Last 10 updates)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="timestamp" 
                tickFormatter={(tick) => new Date(tick).toLocaleTimeString()}
            />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="page_views" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
