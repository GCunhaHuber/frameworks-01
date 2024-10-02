import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'frameworks', 'root', 'igor', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});