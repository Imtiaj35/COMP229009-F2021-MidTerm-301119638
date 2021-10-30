/*++++++++++++++++++++++++++++++++++++++++++++++++++
     * File name: index.js
     * Student Name: Imtiaj Hossain
     * StudentID: 301119638
     * Web App name: COMP229-F2021-MidTerm-301119638
+++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
