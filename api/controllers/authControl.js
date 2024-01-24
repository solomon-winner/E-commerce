import {db} from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = (req, res) => {
    
}
export const register = (req, res) => {
    const query = "SELECT * FROM User WHERE Email = ?"
    const email = req.body.Email;

    db.query(query, [req.body.Email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json(" User already exists!");
        const salt = bcrypt.genSaltSync(10);
    })
}
export const logout = () =>{}