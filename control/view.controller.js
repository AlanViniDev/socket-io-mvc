//função para importar a nossa página inicial
exports.view = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/home.html' , { root : __dirname});
};
exports.module = this.view;