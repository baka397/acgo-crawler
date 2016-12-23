'use strict';
const authTool = require('../commom/auth');
const config = require('../config');
const request = require('superagent');
let apiTokenParams = authTool.getTokenParams(config.apiKey,config.apiAlias);
describe('Prepare', function(){
    
});