/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tesla_user', {
    user_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    login_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nick_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    role_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    power_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tesla_user'
  });
};
