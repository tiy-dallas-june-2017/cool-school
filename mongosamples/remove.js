const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://localhost:27017/school';

MongoClient.connect(url, function(err, db) {

  const cb = function(err, result) {
    console.log('err', err);
    console.log('result', result);
    db.close();
  }

  db.collection('teachers')
    .remove({ _id: ObjectId('5981f0dd120f021cec47edde') }, cb);

});
