import mongoose from 'mongoose';

const connectMD = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(error.message.red.underline);
    process.exit(1);
  }
};

export default connectMD;
