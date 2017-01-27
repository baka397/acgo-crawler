'use strict';
const app = require('./app');
let taskPeriod = parseInt(process.env.NODE_TASK_PERIOD);
app(taskPeriod);