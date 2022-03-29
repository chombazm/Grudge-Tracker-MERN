const { ObjectId } = require('mongodb');

module.exports = (database) => {
  /**
   * @param {string} body.name The name of the offender to be created
   * @param {string} body.offense The offense of the offender to be created
   * @returns The object of the created grudge || The error that is caught during the DB insert
   */
  const createGrudge = async (body) => {
    // collection name is grudges - already passed in the databse file
    const { collection, client } = await database();

    const { name, offense } = body;
    // [TODO] - to be handle the error
    if (!name || !offense) {
      return 0;
    }
    const newGrudge = {
      name,
      offense,
      forgiven: false,
    };
    try {
      await collection.insertOne(newGrudge);
      client.close(); // dont know if its a good idea to close the conection 🤷🏽‍♂️
      return newGrudge;
    } catch (error) {
      console.log('error in createGrudge', error);
      // [TODO] - to be handle the error
      return error;
    }
  };

  const getAllGrudges = async () => {
    const { collection, client } = await database();

    try {
      const allGrudges = await collection.find({}).toArray();
      client.close();
      return allGrudges;
    } catch (error) {
      // console.log('error in getAllGrudges', error);
      // [TODO] - to be handle the error
      return error;
    }
  };
  const getSingleGrudge = async (id) => {
    const { collection, client } = await database();

    try {
      const grudge = await collection.findOne({ _id: ObjectId(id) });
      client.close();
      console.log(grudge, 'grudge on controller');
      return grudge;
    } catch (error) {
      // console.log('error in getSingleGrudge', error);
      // [TODO] - to be handle the error
      return 0;
    }
  };
  const updateGrudge = async (id, body) => {
    const { collection, client } = await database();

    // [TODO] - prevent update if body is empty
    const { forgiven } = body;
    try {
      const grudge = await collection.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { forgiven } },

        // eslint-disable-next-line comma-dangle
        { upsert: true, returnNewDocument: true }
      );
      client.close();
      console.log(grudge.value, 'grudge on controller');
      return grudge.value;
    } catch (error) {
      console.log('error in updateGrudge', error);
      // [TODO] - to be handle the error
      return error;
    }
  };
  const deleteGrudge = async (id) => {
    const { collection, client } = await database();

    try {
      const grudge = await collection.findOneAndDelete({ _id: ObjectId(id) });
      client.close();
      return grudge.value;
    } catch (error) {
      console.log('error in deleteGrudge', error);
      // [TODO] - to be handle the error
      return error;
    }
  };
  const deleteAllGrudges = async () => {
    const { collection, client } = await database();

    try {
      const grudge = await collection.deleteMany({});
      client.close();
      return grudge;
    } catch (error) {
      console.log('error in deleteAllGrudges', error);
      // [TODO] - to be handle the error
      return error;
    }
  };
  return {
    createGrudge,
    getAllGrudges,
    getSingleGrudge,
    updateGrudge,
    deleteGrudge,
    deleteAllGrudges,
  };
};
