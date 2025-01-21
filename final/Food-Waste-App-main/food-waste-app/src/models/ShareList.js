import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize/sequelize.js';

const ShareList = sequelize.define('ShareList', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // trebuie să existe un model User definit
      key: 'id',
    },
  },
  category: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  about: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  shareable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'shareList',
});

export { ShareList };
