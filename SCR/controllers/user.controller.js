 const usermodel = require("../model/user.model");
 const jwt = require("jsonwebtoken");
 const bcrypt = require("bcryptjs");

 async function userregister(req,res){

    const { username , email , password, role = "user"} = req.body;

    const theuseralreadyexist = await usermodel.findOne({
        $or: [
            { username },
            { email }
        ]
    });

    if (theuseralreadyexist) {
        return res.status(400).json({
            message: "the user already exist"
        });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await usermodel.create({
        username,
        email,
        password: hash,
        role  
    });

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_KEY);

    res.cookie('token', token);

    return res.status(201).json({
        message: "user is successfully registered",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role 
        }
    });
 }
    
async function userlogin(req,res){

const { username , email , password} = req.body;

const user = await usermodel.findOne({
    $or: [
        { username },
        { email }
    ]
});

if (!user){
    return res.status(401).json({
        message : "invalid user credentials"
    });
};
 
const verifypassword = await bcrypt.compare(password,user.password);

if (!verifypassword){
    return res.status(401).json({
        message : "invalid user credentials"
    });
};

const token = jwt.sign({
    id : user._id,
    role : user.role
},process.env.JWT_KEY);

res.cookie("token",token);

res.status(200).json({
    message: "user is successfully login",
    user : {
         id: user._id,
         username: user.username,
         email: user.email,
         role: user.role 
         }
    })
} 

 module.exports = {userregister,userlogin};