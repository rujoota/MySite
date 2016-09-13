'use strict';

//const Project = require('../models/project'),
const DynamoStore=require('./dynamoStore');


//const projects = {};

function initProjects () {
    //createProject('Proj1', 'proj1 desc');
    createProject('Proj2', 'proj2 desc');
    createProject('Proj3', 'proj3 desc');
}

var allProjects;
function getAllProjects () {
    DynamoStore.getAllItems("Projects",function (err,data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // print all the projects
            console.log("Scan succeeded.Data returned:"+JSON.stringify(data.Items));
            allProjects=JSON.stringify(data.Items);
        }
    });
    console.log("again Data returned:"+allProjects);
    return allProjects;
}

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the projects
        console.log("Scan succeeded.");
        allProjects=data.Items;
        /*data.Items.forEach(function(proj) {
            console.log(proj.name + ": ", proj.desc);
        });*/

        // continue scanning if we have more movies
        /*if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }*/
    }
}

function createProject (name, desc) {
    var item={
        "name": name,
        "desc": desc
    };
    //DynamoStore.putItem("Projects",item,function(err, data) {});
    DynamoStore.putItem("Projects",item);
}

module.exports.getAllProjects = getAllProjects;
module.exports.initProjects = initProjects;
