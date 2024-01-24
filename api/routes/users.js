import express from "express";
import { updateUser, getUser} from "../controllers/usersControl.js";

const router = express.Router();

router.get("/", getUser);
router.put("/:id", updateUser);

export default router;

