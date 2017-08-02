const mongo = require('../mongo');

function all(cb) {

  const db = mongo.db();

  db.collection('teachers').find().toArray(function(err, docs) {
    console.log('err', err);
    console.log('docs', docs);
    cb(docs);
  });
}

module.exports = {
  all: all
}
