exports.javascript = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/assets/js.js' , { root : __dirname});
};
exports.module = this.javascript;
