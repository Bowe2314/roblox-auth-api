const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const authorizedPlayers = ["123456", "654321"]; // replace with actual IDs

app.use(express.json());

app.post('/checkAuth', (req, res) => {
    const { playerId } = req.body;
    if (!playerId) return res.status(400).json({ error: "playerId required" });

    const isAuthorized = authorizedPlayers.includes(playerId);
    res.json({ authorized: isAuthorized });
});

app.listen(port, () => {
    console.log(`Auth API running on port ${port}`);
});
