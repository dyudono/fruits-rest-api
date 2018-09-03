const AWS = require('aws-sdk')
const db = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' })

const tableName = process.env.fruitTableName

function handler(event, context, callback) {
  const item = JSON.parse(event.body)
  db.put({
    Item: item,
    TableName: tableName
  }, (err, response) => {
    if (err) {
      callback(err)
    } else {
      callback(null, {
        statusCode: 201,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(response)
      })
    }
  })
}

module.exports = {
  handler
}