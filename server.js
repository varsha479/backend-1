const express = require('express');
const app =express();
app.use(express.json());

const PORT=3000;

app.get("/",(req,res)=>{
    return res.status(200).send("welcome to signup page");
})

app.post("/signup",(req,res)=>{
    const{Username,Email,Passward,dob}=req.body;

    if(!Username)return res.status(400).send("Username cannot be empty");
    if(!Email)return res.status(400).send("Email cannot be empty");
    if(!dob)return res.status(400).send("dob cannot be empty");

    if(!Passward || Passward.length<8 || Passward.length>16)return res.status(400).send("Password length should be greater than 8 and less than or equal to  16 ");



    res.send("signup successfully");
})

app.listen( PORT,()=>{
console.log('server is running successfulluy')
})