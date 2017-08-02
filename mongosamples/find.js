const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/school';
MongoClient.connect(url, function(err, db) {
  db.collection('teachers').find().toArray(function(err, docs) {
    console.log('error', err);
    console.log('docs', docs);
    //Close the connection
    //We won't do this with express
    db.close();
  });
});
