const mongoose=require('mongoose');
const contactschema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String
});
module.exports=mongoose.model("contacts",contactschema);