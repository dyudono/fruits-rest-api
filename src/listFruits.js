const AWS = require('aws-sdk')
const db = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' })

const tableName = process.env.fruitTableName

function handler(event, context, callback) {
  db.scan({
    TableName: tableName
  }, (err, data) => {
    if (err) {
      callback(err)
    } else {
      const fruits = data.Items
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(fruits)
      })
    }
  })
}

module.exports = {
  handler
}