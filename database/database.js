const {mongoose } = require("mongoose");
exports.connectDatabase = ()=> {


    mongoose.connect("mongodb+srv://haha:haha@cluster0.lscw2qr.mongodb.net/?appName=Cluster0")

};

console.log("Database connect vayo hai!");