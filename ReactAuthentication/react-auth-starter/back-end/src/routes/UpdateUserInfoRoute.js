import jwt from 'jsonwebtoken';
import { ObjectID } from 'mongodb';
import { getDbConnection } from '../db';

export const UpdateUserInfoRoute = {
    path: '/api/users/:userId',
    method: 'put',
    handler: async (req,res) => {
        const { authorization } = req.headers;
        const { userId } = req.params;
        
        const updates = (({
            favoriteFood,
            hairColor,
            bio,
        }) => ({
            favoriteFood,
            hairColor,
            bio,
        }))(req.body);

        if(!authorization){
            res.status(401).json({message: 'No authorization header'})
        }
        else{
            const token = authorization.split(' ')[1]; // structure of tocken --> ""`Bearer jnjnfier.vrejhbvry.ehjbvu`""
            
            jwt.verify(token, process.env.JWT_SECRET, async( err, decoded) => {
                if(err) return res.status(401).json({message: 'unable to verify token'});

                const { id } = decoded; 

                if( id !== userId) return res.status(403).json({message: 'not allowed'});

                const db = getDbConnection('react-auth-db');

                const result = await db.collection('users').findOneAndUpdate(
                    { _id: ObjectID(id)},
                    { $set: {info: updates}},
                    {returnOriginal: false}
                );

                const { email, isVerified, info } = result.value;

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
            });
        }
    }
}