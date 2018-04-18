/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tesla_user_group', {
    user_groupID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    groupID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    groupName: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'tesla_user_group'
  });
};
