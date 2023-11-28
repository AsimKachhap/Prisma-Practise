const mongoose = require("mongoose");

const connectDb = async function () {
  try {
    const mongooseInstance = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      "MONGODB CONNECTED!!! DB HOST: ",
      mongooseInstance.connection.host
    );
  } catch (error) {
    console.log("MONGODB connection went wrong.", error);
    process.exit(1);
  }
};

module.exports = connectDb;
