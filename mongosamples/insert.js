const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/school';
MongoClient.connect(url, function(err, db) {

  const cb = function(err, result) {
    console.log('err', err);
    console.log('result', result);
    db.close();
  }

  db.collection('teachers').insert({ name: 'Mrs. Doubtfire', age: 64 }, cb);
});
