const express = require('express');
const cors = require('cors');
const contacts = require('./db/contacts');
require('./db/config.js');
const app=express();

app.use(express.json());
app.use(cors());

app.get("/",(req,resp)=>{
    resp.send("app is working");
});

app.post("/add", async(req,resp)=>{
    let contact = new contacts(req.body);
    let result = await contact.save();
    resp.send(result);
});

app.get("/contacts", async(req,resp)=>{
    let contact = await contacts.find();
    if(contact.length>0){
        resp.send(contact)
    }else{
        resp.send({result:"Contact list is empty"});
    }
});

app.delete("/delete/:id", async (req,resp)=>{
    const result = await contacts.deleteOne({_id:req.params.id})
    resp.send(result);
});

app.get("/contact/:id", async (req,resp)=>{
    try {
        const result = await contacts.findOne({ _id: req.params.id });
        if (result) {
          resp.send(result);
        } else {
          resp.send({ result: "No Record Found." });
        }
      } catch (error){
        resp.status(500).send({ error: "An error occurred." });
      }
});

app.put("/edit/:id", async (req,resp)=>{
    let result = await contacts.updateOne(
        {_id:req.params.id},
        {
        $set: req.body
        }
    )
    resp.send(result);
});

const port=5000;
app.listen(port,()=>{
    console.log("server is running on port "+port+"...");
});