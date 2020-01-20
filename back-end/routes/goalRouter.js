const { Router } = require('express');
const goalRouter = Router();
const { Goal } = require('../models.js')
const { restrict } = require('../services/auth')

goalRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const goals = await Goal.findAll();
      res.json(goals);
    } catch (e) {
      next(e)
    }
  })
  .post(async (req, res, next) => {
    try {
      const goal = await Goal.create({
        ...req.body,
        is_complete: false,
        // userId: res.locals.user.id
      });
      res.json(goal);
    } catch (e) {
      next(e)
    }
  })

goalRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const goal = await Goal.findByPk(req.params.id);
      res.json(goal);
    } catch (e) {
      next(e)
    }
  })

  .put(async (req, res, next) => {
    try {
      const goal = await Goal.findByPk(req.params.id);
      await goal.update(req.body)
      res.json(goal)
    } catch (e) {
      next(e)
    }
  })

  .delete(async (req, res, next) => {
    try {
      const goal = await Goal.destroy({ where: { id: req.params.id } })
      res.json(goal)
    } catch (e) {
      next(e)
    }
  })

module.exports = goalRouter;