const mongoose = require("mongoose");

module.exports = mongoose.model("Produto", {
    nome: String,
    preco: Number,
    categoria: String,
    imagem: String
});
