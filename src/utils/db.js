import mongoose from "mongoose";

let isConnected = false;

const connect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongoodb Connected");
    return;
  }
  try {
    await mongoose.connect(process.env.Mongo_URL, {
      dbName: "nextjs",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Mongoodb Connected");
  } catch (error) {
    console.log(error);
  }
};
export default connect;
