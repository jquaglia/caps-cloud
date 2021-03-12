'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
const sns = new AWS.SNS();
const faker = require('faker');

const topic = 'arn:aws:sns:us-west-2:302651359699:pickup';

const order = {
  orderId: faker.random.uuid(),
  customer: faker.name.findName(),
  vendorID: 'https://sqs.us-west-2.amazonaws.com/302651359699/flowers-queue',
};

const params = {
  TopicArn: topic,
  Message: JSON.stringify(order),
};

setInterval(() => {
  sns.publish(params).promise().then(console.log).catch(console.error);
}, 5000);