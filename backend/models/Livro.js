import { DataTypes } from 'sequelize';
import { sequelize } from '../database/conecta.js';
import { Admin } from './Admin.js';

export const Livro = sequelize.define('livro', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  paginas: {
    type: DataTypes.INTEGER(3),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false
  },
  sinopse: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  num: {
    type: DataTypes.INTEGER(6),
    allowNull: false,
    defaultValue: 0
  },
  total: {
    type: DataTypes.INTEGER(8),
    allowNull: false,
    defaultValue: 0
  },
  destaque: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});

Livro.belongsTo(Admin, {
  foreignKey: {
    name: 'admin_id',
    defaultValue: 1,    // para os filmes inicialmente cadastrados
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Admin.hasMany(Livro, {
  foreignKey: 'admin_id'
})
