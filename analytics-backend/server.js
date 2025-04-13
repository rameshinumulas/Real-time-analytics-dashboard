const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/api/analytics", (req, res) => {
    const mockData = {
        timestamp: new Date().toISOString(),
        active_users: Math.floor(Math.random() * 100),
        page_views: Math.floor(Math.random() * 200),
        avg_session_duration: Math.floor(Math.random() * 5 +1).toFixed(),
    }
    res.json(mockData);
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Mock API running at http://localhost:${PORT}/api/analytics`)
})