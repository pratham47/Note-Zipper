const mongoose = require( "mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://pratham:1password123@cluster0.nlaoz.mongodb.net/notes2?retryWrites=true&w=majority" , {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports =  connectDB;
