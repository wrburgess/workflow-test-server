const http = require('http');
const express = require('express');
const workflowsRouter = require('./routes/workflowsRouter');

let app = express();
var port = process.env.PORT || 3000;

app.use(workflowsRouter);

let server = http.createServer(app);
server.listen(port);
