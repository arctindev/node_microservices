const express = require('express');
const server = express()
const db = require('./database/pool')

server.get('/db', (req,res) => {
  db.connect()
    .then(client => {
      client.query('SELECT NOW()')
      .then(data => {
        console.log('Successfuly connected to db');
        client.release();
        res.send({ message: "Success", data : data });
      })
      .catch(err => {
        console.error(err)
        client.release();
        res.send({ message: "Failed", data : err });
      })
    })
});

server.get('/', (req,res) => {
  console.log('Request has been received');
  res.send({ message: 'response'})
})

module.exports = server;
