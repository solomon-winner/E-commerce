import express from "express";
import {addUsers, updateUsers, deleteUsers} from "../controllers/usersControl.js";

const router = express.Router();

router.post("/", addUsers);
router.put("/", updateUsers);
router.delete("/:id", deleteUsers);

export default router;

