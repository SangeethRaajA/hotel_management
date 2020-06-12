const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// import routes
// const categoryRoutes = require("./routes/category");
const roomRoutes = require("./routes/room.router");

// app
const app = express();

// app.get("/",(req, res)=>{
//     res.send("hello world new");
// });

const port = process.env.PORT || 8050;

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log("DB Connected"));

// middlewares
app.use(cors());
app.use(express.json());

// routes middleware
app.use("/api", roomRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
