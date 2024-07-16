import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://psrathore13101:rathore13101@cluster0.aepgydk.mongodb.net/food-del')
    .then(()=>console.log("DB connected successfully"));
}