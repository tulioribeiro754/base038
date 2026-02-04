const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, senha } = req.body;

    if (email === "admin@base038.com" && senha === "1234") {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        });

        res.json({ token });
    } else {
        res.status(401).json({ erro: "Credenciais inválidas" });
    }
});

module.exports = router;
