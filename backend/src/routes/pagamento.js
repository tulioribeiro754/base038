const express = require("express");
const mercadopago = require("mercadopago");
const router = express.Router();

mercadopago.configure({
    access_token: process.env.MP_TOKEN
});

router.post("/", async (req, res) => {
    const pref = {
        items: req.body.items
    };

    const r = await mercadopago.preferences.create(pref);
    res.json({ link: r.body.init_point });
});

module.exports = router;
