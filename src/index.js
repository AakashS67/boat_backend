const dotenv = require('dotenv')
const connectDB = require('./db/dbConfig')
const app = require('./app')
dotenv.config({
    path: "./env"
})


connectDB().then(() => {
app.listen(process.env.PORT || 8080, ()=>{
console.log(`Server is running on port : ${process.env.PORT}`);
})
    })
    .catch((err) => {
        console.log("MONGODB connection failed!", err);
    })