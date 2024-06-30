import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";
const app = express()
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI;
//connect to mongodb

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('connected to mongodb')
} catch (error) {
    console.log('Eror: ' + error)
}


app.get("/", (req, res) => {
    res.send("bookstore A BACKEND!!");
});

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()