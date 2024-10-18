
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Define associations here if needed.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      idbook: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      book_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'Books',
     
    }
  );
  return Book;

module.exports = Book;
};

