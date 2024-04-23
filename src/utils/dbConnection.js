import mongoose from "mongoose";

const Connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if (conn) {
      console.log("connected successfully to database");
    } else {
      console.log("failed to connect");
    }
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
