const express = require('express');
const workflows = require('../fixtures/workflows');
const workflowFields = require('../fixtures/workflowFields');

let workflowsRouter = express.Router();

let getWorkflowsRoute = (req, res) => {
  res.send(workflows);
};

let getWorkflowsFieldsRoute = (req, res) => {
  res.send(workflowFields);
};

let createEmailRoute = (req, res) => {
  console.log('creating email');
};

workflowsRouter.get('/workflows', getWorkflowsRoute);
workflowsRouter.get('/workflows/:id/fields', getWorkflowsFieldsRoute);

module.exports = workflowsRouter;
