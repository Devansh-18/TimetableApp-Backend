const express = require("express");
const router = express.Router();

const {login, signup} = require("../controllers/auth");
const{auth,isStudent,isAdmin} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to protected route for Student',
    })
})
router.get("/Admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to protected route for Admin',
    })
})


module.exports = router;