const express = require('express')
const mongoose = require('mongoose')
const EarphoneModel = require('./models/earphone')
const cors = require('cors')
const conn = require('./db/dbConfig')
require('dotenv').config()
const connectDB = require('./db/dbConfig')

const app = express()
app.use(cors());    


// app.get("/getearphone", (req, res) => {
   
//     EarphoneModel.find()
//     .then((earphone)=> res.json(earphone))
//     .catch((err)=>res.json(console.log(err)))

// })

// app.post("/postearphone", async (req, res) => {
//     try {
//         const earphoneData = req.body;
//         const earphone = await EarphoneModel.create(earphoneData);
//         res.status(200).send("Post successfully", earphone);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Error");
//     }
// });

// app.post("/postearphone",(req,res)=>{
//     try { 

//         const earphoneData = req.body;
//         console.log(earphoneData)
//     const earphone = EarphoneModel.create(earphoneData)
//     res.status(200).send("Post successfully", earphone)
//     } catch (error) {
//         res.status(500).send("Internal Error",error)
//     }
// })
const PORT = 8000 || process.env.PORT

    app.listen(PORT, () => {
        try { 
            connectDB()
            console.log(`Express Server is running on port ${PORT}`)
            console.log("DB connected Successfully");
        } catch (error) {
            console.log("Server Error")
        }
    })