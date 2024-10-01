import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  'frameworks-01', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});