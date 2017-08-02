const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/school';

MongoClient.connect(url, function(err, db) {

  const cb = function(err, result) {
    console.log('err', err);
    console.log('result', result);
    db.close();
  }

  db.collection('teachers').update({ name: 'Mrs. Doubtfire' },
    { $set: { age: 65 } }, cb);

});
