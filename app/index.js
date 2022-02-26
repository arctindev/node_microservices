const express = require('express');

const app = express()

app.get('/', (req,res) => {
  console.log('request has been received');
  res.send({ message: 'response'})
})

app.listen(3000, () => console.log('Server is up and running on port 3000'));