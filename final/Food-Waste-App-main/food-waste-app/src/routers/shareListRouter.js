import express from "express";
import { ShareList } from "../models/ShareList.js";

const shareListRouter = express.Router();

// CRUD pentru `shareList`
shareListRouter.get('/', async (req, res, next) => {
  try {
    const shareList = await ShareList.findAll();
    res.json(shareList.length > 0 ? shareList : []);
  } catch (error) {
    next(error);
  }
});

// Celelalte rute sunt similare (GET by ID, POST, PUT, DELETE)
export { shareListRouter };
