const express=require("express");
const fs = require('fs');

const app=express();

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/static/root.html");
})

app.get('/group',(req,res)=>{
    if (fs.existsSync(__dirname+"/static/student.html"))
    {
        res.sendFile(__dirname+"/static/student.html");
    }
    else
    {
        res.redirect("/error")
    }
})

app.get('/home',(req,res)=>{
    res.status(301);
    res.redirect("https://www.google.com");
})

app.all('*', (req, res) => {
    res.status(404);
    res.sendFile(__dirname+"/static/404_error.html");
});

app.listen(8080,()=>console.log("App is live at port 8080"));