# fruits-rest-api
A simple serverless REST API built on AWS

This repo was created to prepare for a brown bag session.
It has a few API endpoints handled by AWS lambdas behind AWS API Gateway that writes to and read from AWS DynamoDB.

The source code is mostly from [this serverless-components tutorial](https://serverless.com/blog/how-create-rest-api-serverless-components/)

## Dependencies
It uses [serverless-components](https://github.com/serverless/components) for fast development, which requires NodeJS and [serverless](https://github.com/serverless/serverless).

## How to run on local machines
* Get an AWS account ready (need to have credit card info in order for serverless to work) and set up access on local machine. See [this guide](https://serverless.com/framework/docs/providers/aws/guide/credentials/) for more information.
* Use serverless-components CLI tool to deploy to the AWS account:
  ```
  components deploy
  ```
* Use curl, postman, or your favourite tool to hit the endpoints:
  * POST a new fruit (change the URL to the deployed one):
    ```
    curl --request POST \
    --url https://3412ssa.execute-api.us-east-1.amazonaws.com/dev/fruits \
    --header 'content-type: application/json' \
    --data '{
        "id": 1,
        "name": "Banana",
        "description": "The yellow fruit.",
        "price": 15
      }'
    ```
  * GET all fruits from database (change the URL to the deployed one):
    ```
    curl https://3412ssa.execute-api.us-east-1.amazonaws.com/dev/fruits
    ```
