const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const JWT_SECRET = process.env.JWT_SECRET;

const  User = require('../../../models/User/User');

router.get('/', async(req, res) => {

    return res.status(200).send('give the list of users')
})

router.get('/:id', async(req, res) =>{

    return res.send(200).send("give a user's data");
})

router.post('/login', 
            [
                check('email', 'Please include a valide email').isEmail(),
                check('password', 'Password is required').exists().isLength({min : 8, max: 16})
            ],
            async (req, res) => {
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res
                            .status(400)
                            .json({errors : errors.array()})
                }
                const {email, password} =  req.body;
                try{
                    // See if user exists
                    let user = await user.findOne({email});
                    if (!user){
                        return res
                        .status(400)
                        .json({errors : [{msg : "Invalide credentials"}]});
                    }
                    const isMatch = await bcrypt.compare(password, user.password);
                    if(!isMatch){
                        return res
                                .status(400)
                                .json({errors : [{msg : 'Invalid credentials'}]});
                    }
                    // return jsonwebtoken
                    const payload = {
                        user : {
                            id : user.id
                        }
                    }
                    jwt.sign(
                        // payload
                        payload,
                        // secret
                        JWT_SECRET,
                        // expire in
                        {expiresIn : 36000},
                        (err, token) => {
                            // error handle
                            if(err) throw err;
                            // send token
                            res.json({token :  token, user_id : user.id})
                        }
                    );
                }
                catch(err){
                    console.error(err);
                    return res
                            .status(500)
                            .send('server error');
                }
                return res.status(200).send(email);
});


module.exports = router;