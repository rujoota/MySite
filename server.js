'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan'); // formerly express.logger
var errorhandler = require('errorhandler');
const DynamoStore=require('./data/dynamoStore');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// express/connect middleware
app.use(favicon(__dirname + '/app/favicon.ico'));
app.use(morgan('dev'));

// serve up static assets
app.use(express.static(path.join(__dirname, 'app')));

// development only
if ('development' === app.get('env')) {
    app.use(errorhandler());
}

//require('./data/projects.js').initProjects();
var ProjectObj=require('./data/projects.js');

app.get('/projects123',function(req, res){
    DynamoStore.getAllItems("Projects",function (err,data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // print all the projects
            console.log("Scan succeeded.Data returned:"+JSON.stringify(data.Items));
            return res.json(data.Items);
        }
    });
});
http.createServer(app).listen(app.get('port'), function () {
    console.log('myApp server listening on port ' + app.get('port'));
});