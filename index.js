const http = require('http');
const express = require('express');
const workflowsRouter = require('./routes/workflowsRouter');

let app = express();

app.use(workflowsRouter);

let server = http.createServer(app);
server.listen(3000);
