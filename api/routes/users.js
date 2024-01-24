import express from "express";
import {addUsers, updateUsers, deleteUsers, getUsers} from "../controllers/usersControl.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;

