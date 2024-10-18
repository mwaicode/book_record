// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Book extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Book.init({
//     idbook: DataTypes.INTEGER,
//     book_name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Book',
//   });
//   return Book;
// };
// models/book.js

// models/book.js

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

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database'); // Ensure this is your sequelize instance

// const Book = sequelize.define('Book', {
//   idbook: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   book_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   tableName: 'books',
//   // timestamps: false,
// });

// module.exports = Book;
