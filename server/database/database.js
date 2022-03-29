const { MongoClient } = require('mongodb');
const config = require('../config/config');

const client = new MongoClient(config.MongoURI, {
  useNewUrlParser: true,
});

module.exports = async () => {
  try {
    await client.connect();

    console.log('MongoDB connected successfully ✅');
  } catch (err) {
    console.log(err);
  }
  // const newGrudge = {
  //   id: 1,
  //   name: 'chomba',
  //   offense: 'Cant seem too figure out to conect mongodb',
  //   forgiven: false,
  // };
  // client.db('grudgesTracker').collection('grudges').insertOne(newGrudge);
  return {
    client,
    db: client.db('grudgesTracker'),
    collection: client.db('grudgesTracker').collection('grudges'),
  };
  // return client.db('grudgesTracker').command({ ping: 1 });
};
