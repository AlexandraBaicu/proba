import express from "express";
import { FriendsShareList } from "../models/FriendsShareList.js";

const friendsShareListRouter = express.Router();

// CRUD pentru `friendsShareList`
friendsShareListRouter.get('/', async (req, res, next) => {
  try {
    const friendsShareList = await FriendsShareList.findAll();
    res.json(friendsShareList.length > 0 ? friendsShareList : []);
  } catch (error) {
    next(error);
  }
});

// Celelalte rute sunt similare (GET by ID, POST, PUT, DELETE)
export { friendsShareListRouter };
