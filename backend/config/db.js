const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://rajeshdukiya2000:rdshop123@cluster0.0sbdzs2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB