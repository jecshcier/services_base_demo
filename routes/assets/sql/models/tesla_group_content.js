/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tesla_group_content', {
    contentID: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    groupID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    groupName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    userID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updateTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    delflag: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tesla_group_content'
  });
};
