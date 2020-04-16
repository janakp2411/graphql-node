import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "A product must have a name"] 
    },
    description: { 
        type: String 
    },
    price: { 
        type: String, 
        required: [true, "A product must have a price"] 
    },
    tags: [{ 
        url: String 
        }
    ],
    category: { 
        type: String, 
        required: [true, "You must supply a category to a product"] 
    },
    imgUrl: {
        type: String
    }
});

const Product = mongoose.model("products", productSchema)

export default Product;