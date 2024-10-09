import mongoose from "mongoose";

const FoodDBConnect = async () => {
  try {
    const foodConnection = await mongoose.connect(
      "mongodb://localhost:27017/FoodDatabase"
    );
    console.log(
      "Connection is done with database named:",
      foodConnection.connection.name
    );
  } catch (error) {
    console.log(error);
  }
};
export { FoodDBConnect };
