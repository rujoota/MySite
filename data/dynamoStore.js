const AWS=require('aws-sdk');
AWS.config.update({region:'us-west-2'});
const dynamodbDocClient=new AWS.DynamoDB.DocumentClient();

function putItem(table,item,callback) {
    var params={
        TableName:table,
        Item:item
    };
    console.log("Adding a new item...");
    dynamodbDocClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
    //dynamodbDocClient.put(params,callback);

}
function getAllItems(table,callback) {
    var params={
        TableName:table
    };
    dynamodbDocClient.scan(params, callback);
}

/*function getItem(table,idName,id,callback) {
    var params={
        TableName:table,
        Key:{}
    }
    params.Key[idName]={S: id};
    dynamodb.getItem(params, callback);
}*/
module.exports.putItem=putItem;
//module.exports.getItem=getItem;
module.exports.getAllItems=getAllItems;