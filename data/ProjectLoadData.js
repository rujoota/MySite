var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing data into DynamoDB. Please wait.");

var allProjs = JSON.parse(fs.readFileSync('/Users/rujuraj/Desktop/AngularProjects/MySite/data/projectdata.json', 'utf8'));
allProjs.forEach(function(proj) {
    var params = {
        TableName: "Projects",
        Item: {
            "name":  proj.name,
            "desc": proj.desc
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add ", proj.name, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", proj.name);
        }
    });
});