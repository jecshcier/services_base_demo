/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tesla_group', {
    groupID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    groupName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    createUser: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'tesla_group'
  });
};
