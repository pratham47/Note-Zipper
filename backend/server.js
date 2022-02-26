const express = require('express');
const userRoutes = require("./routes/userRoutes.js");
const noteRoutes =require( "./routes/noteRoutes.js");
const connectDB = require("./config/db.js");
const { errorHandler, notFound } = require( "./middleware/errorMiddleware.js");

connectDB();

const app = express(); 

app.use(express.json()); 

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT,console.log( `Server running  on port ${PORT}`));
