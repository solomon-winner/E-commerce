import {db} from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = (req, res) => {
    const query = "SELECT * FROM User where Email = ?"
    db.query(query, [req.body.Email], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User Not Found!");

        const compare = bcrypt.compareSync( req.body.Password, data[0].Password);
         if (!compare) 
         return res.status(400).json("Wrong Email or Password!");
    })
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
             req.body.Bankaccount, hashedPassword, req.body.Email, 
             req.body.Country, req.body.City, req.body.subCity, 
             req.body.street]
             
             db.query(query, [values], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.status(200).json("User has been Created!")
             })
    })
}
export const logout = () =>{}