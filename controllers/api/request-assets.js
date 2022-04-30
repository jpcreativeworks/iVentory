const router = require("express");
const fs = require("fs");
const csv = require("csvtojson");
const eastCoastData = "../../db/Eastcoast_WH-Table.csv";
const hollywoodData = "../../db/Hollywood_WH-Table.csv";
const laData = "../../db/LA_WH-Table.csv";
const tucsonData = "../../db/Tucson_WH-Table.csv";
const westCoastData = "../../db/Westcoast_WH-Table.csv";

// need have a key value pair to associate the data. need to create that in mysql workbench.
// created key value pair and updated values THIS ROUTE IS A HELPER FUNCTION
const insideRoute = () => {
    csv({noheader: false}).fromFile(tucsonData)
    .then(jsonData =>{
        console.log(jsonData)
        fs.writeFileSync("jsonFile.json", JSON.stringify(jsonData), function(err) {
            if (err) throw err
        })
    })
};

module.exports = insideRoute;