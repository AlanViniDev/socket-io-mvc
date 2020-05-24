exports.jquery = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/assets/jquery.min.js' , { root : __dirname});
};
exports.module = this.jquery;
