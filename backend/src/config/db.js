import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);
    console.log("Lien ket csdl thanh cong");
  } catch (error) {
    console.error("loi khi lien ket csdl", error);
    process.exit(1); // exit with error
  }
};
