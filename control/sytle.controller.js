exports.style = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/assets/css.css' , { root : __dirname});
};

exports.module = this.style;