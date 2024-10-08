import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server running on port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Database connection failed: ", error);
})


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("MongoDB connected");

//         app.on("errror", (error) => {
//             console.log("ERRROR: ",error);
//             throw error;
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server running on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// })()