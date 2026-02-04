const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, senha } = req.body;

    if (email === "admin@base038.com" && senha === "1234") {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
});

module.exports = router;
