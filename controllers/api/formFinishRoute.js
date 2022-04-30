const router = require('express').Router();
const withAuth = require('../../utils/auth');
const User = require('../../models/User');
const Episodic = require('../../models/Episodic');
const Inventory = require('../../models/Inventory');
const jsontocsv = require("json2csv");
const csv = require("csvtojson");

let episodicTitle = ;
let 
