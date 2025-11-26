// alternative way 
const{connectDatabase} = require("./database/database");
const Blog = require("./Model/blogModel")
const express = require("express")
const app = express()
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

    console.log("Mangodb sanga connect vayo hai!");

app.get("/",(req,res)=>{
    res.json({
        message:"yo home page hai",
    })
})

app.get("/contact",(haha,huhu)=>{
    huhu.send("This is Contact Page Hai");
})


app.get("/",(req,res)=>{
    res.send("Hello I am From Home Page")
})

app.listen(3000,(req,res)=>{
    console.log("Node js started at port 3000")
});


//CREATE BLOG API

app.post("/createBlog",async(req,res)=>{

    // const title = req.body.title;
    // const subtitle = req.body.subtitle;
    // const description = req.body.description;

//Alternative (object destructuring)
const {title,subtitle,description} = req.body
console.log(req.body)


// Insert to database logic goes here

await Blog.create({
    title,
    subtitle,
    description
});



    res.json({

        status: 201,
        message: "Blog created successfully",
    });
});






//mongodb+srv://haha:haha@cluster0.lscw2qr.mongodb.net/?appName=Cluster0