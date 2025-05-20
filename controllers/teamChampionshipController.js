const service = require('../services/teamChampionshipService');

exports.addRelation = async (req, res) => {
  try {
    const relation = await service.createRelation(req.body);
    res.status(201).json(relation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRelations = async (req, res) => {
  try {
    const relations = await service.getAllRelations();
    res.json(relations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};