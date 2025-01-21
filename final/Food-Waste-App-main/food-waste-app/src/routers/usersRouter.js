import express from "express";
import { User } from "../models/User.js";

const usersRouter = express.Router();

// GET all users
usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users.length > 0 ? users : []);
  } catch (error) {
    next(error);
  }
});

// GET a single user by ID
usersRouter.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    user ? res.json(user) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// POST (create) a new user
usersRouter.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

// PUT (update) a user by ID
usersRouter.put('/:id', async (req, res, next) => {
  try {
    const [updatedRows] = await User.update(req.body, { where: { id: req.params.id } });
    updatedRows ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// DELETE a user by ID
usersRouter.delete('/:id', async (req, res, next) => {
  try {
    const deletedRows = await User.destroy({ where: { id: req.params.id } });
    deletedRows ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

export { usersRouter };
