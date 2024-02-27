const mongoose = require('mongoose')

const earphoneSchema = new mongoose.Schema({
    product_item: String,
    product_title: String,
    product_image: String,
        price: String,
        price_2: String,
        discount: String    
        
})
const EarphoneModel = mongoose.model("earphone",earphoneSchema)

module.exports = EarphoneModel