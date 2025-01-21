import express from "express";
import { Friend } from "../models/Friend.js";

const friendsRouter = express.Router();

// Operațiuni CRUD similare cu cele pentru `users`
friendsRouter.get('/', async (req, res, next) => {
  try {
    const friends = await Friend.findAll();
    res.json(friends.length > 0 ? friends : []);
  } catch (error) {
    next(error);
  }
});

friendsRouter.get('/:id', async (req, res, next) => {
  try {
    const friend = await Friend.findByPk(req.params.id);
    friend ? res.json(friend) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

friendsRouter.post('/', async (req, res, next) => {
  try {
    const newFriend = await Friend.create(req.body);
    res.status(201).json(newFriend);
  } catch (error) {
    next(error);
  }
});

friendsRouter.put('/:id', async (req, res, next) => {
  try {
    const [updatedRows] = await Friend.update(req.body, { where: { id: req.params.id } });
    updatedRows ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

friendsRouter.delete('/:id', async (req, res, next) => {
  try {
    const deletedRows = await Friend.destroy({ where: { id: req.params.id } });
    deletedRows ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

export { friendsRouter };
