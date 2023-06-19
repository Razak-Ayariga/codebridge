import sequelize from "./dataBase/dbConfig.js";
import dogsModel from "./models/dogsModel.js";

async function initializeDatabase() {
  await sequelize.sync();
  await dogsModel.bulkCreate([
    { name: "Neo", color: "red & amber", tail_length: 22, weight: 32 },
    { name: "Jessy", color: "black & white", tail_length: 7, weight: 14 },
  ]);
  console.log("Database initialized successfully.");
}

initializeDatabase();
