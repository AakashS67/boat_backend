const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// import cookieParser from 'cookie-parser'
const router = require('./routes/index')
dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json()) 
// app.use(express.urlencoded({extended:true, limit: "16kb"}))
// app.use(express.static("public"))
// app.use(cookieParser())

app.use('/api',router)


module.exports = app




















// const express = require('express')
// const mongoose = require('mongoose')
// const EarphoneModel = require('../models/earphone')
// const cors = require('cors')
// require('dotenv').config()


// // const connectDB = require('./db/dbConfig')
// const router = require('./routes')
// const userModel = require('../models/userModel')
// const connectionDB = require('../db/dbConfig')

// const app = express()
// app.use(cors());    
// app.use(express.json())
// app.use('/api',router)

// // app.get("/getearphone", (req, res) => {
   
// //     EarphoneModel.find()
// //     .then((earphone)=> res.json(earphone))
// //     .catch((err)=>res.json(console.log(err)))

// // })

// // app.post("/postearphone", async (req, res) => {
// //     try {
// //         const earphoneData = req.body;
// //         const earphone = await EarphoneModel.create(earphoneData);
// //         res.status(200).send("Post successfully", earphone);
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).send("Internal Error");
// //     }
// // });

// // app.post("/postearphone",(req,res)=>{
// //     try { 

// //         const earphoneData = req.body;
// //         console.log(earphoneData)
// //     const earphone = EarphoneModel.create(earphoneData)
// //     res.status(200).send("Post successfully", earphone)
// //     } catch (error) {
// //         res.status(500).send("Internal Error",error)
// //     }
// // })




// const PORT = 8000 || process.env.PORT

//     app.listen(PORT, () => {
//         try {
//              connectionDB
//              console.log(`Express Server is running on port ${PORT}`)
//         } catch (error) {
//             console.log("Server Error")
//         }
//     })