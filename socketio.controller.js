exports.socketio = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/assets/socket.io.js' , { root : __dirname});
};
exports.module = this.socketio;
