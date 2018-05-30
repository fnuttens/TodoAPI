const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db(dbName);

  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID('5b0dcb5aecf65e36363dd507')
  // }, {
  //   $set: {completed: true}
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('5b0d997ab7c3c922d4dab266')
  }, {
    $set: {name: 'Florent'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
