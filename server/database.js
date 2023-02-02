import mongoose from "mongoose";

//connect to db

const connectToDB = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    mongoose.set('strictQuery', false)
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`connect to db: ${connect.connection.host} `);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectToDB;