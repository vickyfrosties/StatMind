const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/login", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB is connected !");

  } catch (error) {
    console.error("Connexion failed", error);
    process.exit(1);
  }
};

export default connectDB;