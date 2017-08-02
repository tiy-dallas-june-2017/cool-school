const MongoClient = require('mongodb').MongoClient;

let database = null;

function connect(url, callback) {
  MongoClient.connect(url, function(err, db) {
    console.log('connection made');
    database = db;
    callback();
  });
}

function db() {
  return database;
}

module.exports = {
  connect: connect,
  db: db
}
