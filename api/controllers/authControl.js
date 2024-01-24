import {db} from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = (req, res) => {
    
}
export const register = (req, res) => {
    const query = "SELECT * FROM User WHERE Email = ?"
    const email = req.body.Email;
    console.log(req)
}
export const logout = () =>{}