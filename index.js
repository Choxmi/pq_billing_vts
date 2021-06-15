const express = require('express');
require('dotenv').config();
var zmq = require('zeromq')
  , sock = zmq.socket('push');

app = express();

const initZmq = () => {
    sock.bindSync('tcp://127.0.0.1:1228');
    console.log('Producer bound to port 1228');
}

setInterval(function(){
  sock.send(parseInt(Math.random() * 10));
}, 5000);

app.listen(process.env.PORT,() => {
    initZmq();
    console.log("pq_vts started",process.env.PORT);
});
