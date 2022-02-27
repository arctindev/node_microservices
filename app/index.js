server = require('./src/server');

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
});
