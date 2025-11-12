const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const authorizedPlayers = ["9900531658", "1789159720"];

app.post("/checkAuth", (req, res) => {
    const { playerId } = req.body;
    if (!playerId) return res.status(400).json({ error: "playerId required" });

    const isAuthorized = authorizedPlayers.includes(playerId);
    res.json({ authenticated: isAuthorized, message: isAuthorized ? "Player authorized" : "Player not authorized" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Auth API running on port ${port}`));
