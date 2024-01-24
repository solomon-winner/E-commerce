import {db} from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = (req, res) => {
    
}
export const register = (req, res) => {
    const query = "SELECT * FROM User WHERE Email = ?"
    const email = req.body.Email;

    db.query(query, [email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json(" User already exists!");
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.Password, salt);

        const query = "INSERT INTO User (`Name`,`Nitche`,`Bank`,`Bankaccount`,`Password`,`Email`,`Country`,`City`,`subCity`,`street`) VALUES (?)"
        const values = [req.body.Name, req.body.Nitche, req.body.Bank,
             req.body.Bankaccount, req.body.Password, req.body.Email, 
             req.body.Country, req.body.City, req.body.subCity, 
             req.body.street]
             
    })
}
export const logout = () =>{}