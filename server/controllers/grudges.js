const dbConnect = require('../database/database');
const grudges = require('../services/grudges')(dbConnect);

const createGrudge = async (req, res) => {
  const grudge = await grudges.createGrudge(req.body);
  if (!grudge) {
    return res.status(400).json({ msg: 'Bad request' });
  }
  return res.status(201).json(grudge);
};

const getAllGrudges = async (req, res) => {
  const allGrudges = await grudges.getAllGrudges();
  res.status(200).json(allGrudges);
};

const getSingleGrudge = async (req, res) => {
  const grudge = await grudges.getSingleGrudge(req.params.id);
  if (!grudge) {
    return res
      .status(404)
      .json({ msg: `Grudge with id ${req.params.id} not found` });
  }
  return res.status(200).json(grudge);
};

const updateGrudge = async (req, res) => {
  const grudge = await grudges.updateGrudge(req.params.id, req.body);
  if (!grudge) {
    return res
      .status(404)
      .json({ msg: `Grudge with id ${req.params.id} not found` });
  }
  return res.status(200).json(grudge);
};

const deleteGrudge = async (req, res) => {
  const grudge = await grudges.deleteGrudge(req.params.id);
  if (!grudge) {
    return res
      .status(404)
      .json({ msg: `Grudge with id ${req.params.id} not found` });
  }
  // console.log(grudge, 'grudge on controller');
  return res.status(200).json(grudge);
};

const deleteAllGrudges = async (req, res) => {
  const allGrudges = await grudges.deleteAllGrudges();
  return res.status(204).json(allGrudges);
};

module.exports = {
  createGrudge,
  getAllGrudges,
  getSingleGrudge,
  updateGrudge,
  deleteGrudge,
  deleteAllGrudges,
};
