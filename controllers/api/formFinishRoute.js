const { Parser } = require("json2csv");
const fs = require("fs");   
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const User = require('../../models/User');
const Episodic = require('../../models/Episodic');
const Inventory = require('../../models/Inventory');
const jsontocsv = require("json2csv");
const csv = require("csvtojson");

router.post("/createcsv", (req, res) => {
    let data = req.body;
    // const myCars = [
    //   {
    //     car: "Audi",
    //     price: 40000,
    //     color: "blue",
    //   },
    //   {
    //     car: "BMW",
    //     price: 35000,
    //     color: "black",
    //   },
    //   {
    //     car: "Porsche",
    //     price: 60000,
    //     color: "green",
    //   },
    // ];
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);
    console.log(csv);
  
    fs.writeFile("test.csv", csv, (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send({ done: true });
      }
    });
  });


  module.exports = router;