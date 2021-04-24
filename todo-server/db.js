const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Todo-List",{"useNewUrlParser":true})
const Todo=mongoose.model('Todo',{
    item:String
})
module.exports={
    Todo
}