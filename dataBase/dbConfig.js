import { Sequelize } from "sequelize";

const sequelize = new Sequelize("dogs_data", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

export default sequelize;