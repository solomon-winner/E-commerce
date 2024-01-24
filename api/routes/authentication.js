import express from "express"
import {login,  register, logout } from "../controllers/authControl"

const router = express.Router();

router.get("/login", login)