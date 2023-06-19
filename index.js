import sequelize from "./dataBase/dbConfig.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

import dogRoutes from "./routes/dogRoute.js";
app.use("/dog", dogRoutes);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
  app.listen(4000, () => {
    console.log(`Server running on port 4000`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
