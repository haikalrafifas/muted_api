const mongoose = require("mongoose");
const { MONGO_URI, DB_NAME } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { dbName: DB_NAME });
    console.log("Connected to database!");
  } catch (err) {
    console.error("Database connection error:", err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
