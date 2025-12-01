// alternative way 
const { connectDatabase } = require("./database/database");
const Blog = require("./Model/blogModel")
const express = require("express")
const app = express()
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("Mangodb sanga connect vayo hai!");

app.get("/", (req, res) => {
    res.json({
        message: "yo home page hai",
    })
})

app.get("/contact", (haha, huhu) => {
    huhu.send("This is Contact Page Hai");
})


app.get("/", (req, res) => {
    res.send("Hello I am From Home Page")
})

app.listen(3000, (req, res) => {
    console.log("Node js started at port 3000")
});


//CREATE BLOG API

app.post("/createBlog", async (req, res) => {

    // const title = req.body.title;
    // const subtitle = req.body.subtitle;
    // const description = req.body.description;

    //Alternative (object destructuring)
    const { title, subtitle, description } = req.body
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
app.get("/blogs", async (req, res) => {
    //fetching/reading all blogs from Blog Model
    const blogs = await Blog.find();

    if (blogs.length == 0) {
        res.json({
            status: 404,
            message: "Empty Blog",
        });
    } else {
        res.json({
            status: 200,
            message: "Blogs Fetched Successfully",
            data: blogs, 
        });
    }
}
)

//Get => get single blog
app.get("/blogs/:id", async(req,res)=>{
    console.log(req.params.id);
    const id = req.params.id;
    //const (id) req.params Alternative
    // const blog = await Blog.find({_id: id});
    //Alternative
    const blog = await Blog.findById(id)

    //if(blog.length == 0){
    // res.status(404).json({
    //message:"No Blog found with that id"
    //})
    //}else{
    
        res.status(200).json({
            message:"Blogs Fetched Successfully",
            data: blog,
        })
    //}
}
)
app.delete("/blogs/:id",async(req,res)=>{
    ///logic
    const id= req.params.id;
    await Blog.findByIdAndDelete(id);
    res.json({
        status:200,
        message:"Blog Deleted Successfully",
    })
})

app.patch("/blogs/:id",async(req,res)=>{
    const id = req.params.id;
    const {title, subtitle, description} = req.body;
    const blog=await Blog.findByIdAndUpdate(id,{
        title:title,
        subtitle:  subtitle,
        description: description
    });
    res.json({
        status:200,
        message:"Blog Updated Successfully",
        data:blog,
    });
});



//mongodb+srv://haha:haha@cluster0.lscw2qr.mongodb.net/?appName=Cluster0