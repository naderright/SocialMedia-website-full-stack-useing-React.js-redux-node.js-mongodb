import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';

import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
//Routes
dotenv.config()
const app = express();

//Middelwear
// app.use(express.static('public'));
// app.use('/image',express.static('image'))
app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true}));
app.use(cors());
app.use("/image", express.static(path.join(__dirname, "public/image")));

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedToPology:true})
.then(()=>app.listen(process.env.PORT,()=>console.log(`listennig at port ${process.env.PORT}`)))
.catch((error)=>console.log(error))

//usage of routes
app.use('/auth',AuthRoute);
app.use('/user',UserRoute);
app.use('/posts',PostRoute);
app.use('/upload',UploadRoute);