const express = require("express");
const mercadopago = require("mercadopago");
const router = express.Router();

mercadopago.configure({
    access_token: process.env.MP_TOKEN
});

router.post("/", async (req, res) => {
    const preference = {
        items: req.body.items,
        payment_methods: {
            excluded_payment_types: []
        }
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ link: response.body.init_point });
});

module.exports = router;
