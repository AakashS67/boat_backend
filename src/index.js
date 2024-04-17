import dotenv from "dotenv"
import connectDB from "./db/dbConfig.js";

dotenv.config({
    path: "./env"
})

connectDB()
    .then(() => {
app.listen(process.env.PORT || 8080, ()=>{
console.log(`Server is running on port : ${process.env.PORT}`);
})
    })
    .catch((err) => {
        console.log("MONGODB connection failed!", err);
    })