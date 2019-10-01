const http = require('http');
const express = require('express');
const cors = require('cors');
const workflowsRouter = require('./routes/workflowsRouter');
const PORT = process.env.PORT || 3000;
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

let app = express();
app.use(cors(corsOptions));
app.use(workflowsRouter);

let server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`SERVER: Listening on PORT ${PORT}`);
});
