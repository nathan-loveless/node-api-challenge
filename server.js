const express = require('express');
const dbProjRouter = require('./data/db-routerproj.js');
const dbActRouter = require('./data/db-routeract.js');

const server = express();

server.use(express.json());
server.use('/api/projects', dbProjRouter);
server.use('/api/actions', dbActRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Sprint Challenge</h>
    <p>welcome to the sprint challenge!</p>
  `);
});

module.exports = server;
