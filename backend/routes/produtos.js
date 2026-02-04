const express = require("express");
const Produto = require("../models/Produto");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {
    const produtos = await Produto.find();
    res.json(produtos);
});

router.post("/", auth, async (req, res) => {
    const produto = new Produto(req.body);
    await produto.save();
    res.json(produto);
});

router.delete("/:id", auth, async (req, res) => {
    await Produto.findByIdAndDelete(req.params.id);
    res.json({ msg: "Produto removido" });
});

module.exports = router;
