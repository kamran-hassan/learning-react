import { getDbConnection } from "../db";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
export const LogInRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;
        const db = getDbConnection('react-auth-db');
        const user = await db.collection('users').findOne({ email });
        if(!user) res.sendStatus(401);
        else {
        const { _id: id, isVerified, passwordHash, info} = user;  // if name is directly matched then it will take otherwise we require rename

        const isCorrect = await bcrypt.compare(password, passwordHash);

        if(isCorrect) {
            jwt.sign({
                id: id,
                email,
                info,
                isVerified
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err, token) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json({token})
        })
        }
        else res.sendStatus(401)
        }
        
    }
}