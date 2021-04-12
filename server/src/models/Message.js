const { Model, DataTypes } = require('sequelize');

class Message extends Model {
  static init(sequelize) {
    super.init({
      message: DataTypes.STRING,
      audio: DataTypes.BLOB,
    }, {
      sequelize
    });
  }
}

module.exports = Message;