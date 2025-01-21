import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize/sequelize.js';

const Friend = sequelize.define('Friend', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // trebuie să existe un model User definit
      key: 'id',
    },
  },
  tag: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'friends',
});

export { Friend };
