//requisições bibliotecas
const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = 8000;

// requisição da nossa rota
const socketeio = require("./routes/socketio.route.js");

//define um nome para nossa rota principal
app.use("/socketio",socketeio);

var clients = {};

app.get('/', function(req, res){
  res.send('server is running');
});

//inicia o servidor
http.listen(8000, () => {
    console.log('Servidor Iniciado na Porta ' + port);
});

//informa que o usuario se conectou
io.on("connection", function (client) {
    console.log('user connected');
});

io.on("connection", function (client,socket,socketid) {
  
  client.on("join", function(name){
    console.log("Joined: " + name);
    clients[client.id] = name;
    client.emit("update", "You have connected to the server.");
    client.broadcast.emit("update", name + " has joined the server.")
  });
  
  client.on("send", function(msg){
    console.log("Message: " + msg);
    client.broadcast.emit("chat", clients[client.id], msg);
  });
  
  client.on("disconnect", function(){
    console.log("Disconnect");
    io.emit("update", clients[client.id] + " has left the server.");
    delete clients[client.id];
  });
  
  // enviar apenas para o cliente atual
  client.emit('message', "this is a test");
      
  // enviar para todos os clientes, inclusive o atual
  io.emit('message', "this is a test");
      
  // enviar para todos os clientes, exceto o atual 
  client.broadcast.emit('message', "this is a test");
      
  // enviar para todos os clientes (com exceção do atual) para uma sala específica
  client.broadcast.to('game').emit('message', 'nice game');
      
  // enviar para todos os clientes em uma sala específica
  io.in('game').emit('message', 'cool game');
      
  // enviar para o atual, caso ele esteja na sala
  client.to('game').emit('message', 'enjoy the game');
      
  // enviar para todos os clientes em um namespace 'namespace1'
  io.of('namespace1').emit('message', 'gg');
      
  // enviando para um socketid individual
  client.broadcast.to(socketid).emit('message', 'for your eyes only');
});


