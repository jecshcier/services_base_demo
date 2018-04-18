/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system_region', {
    region_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    region_name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ''
    },
    region_type: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '2'
    },
    is_delete: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '0'
    },
    is_carriage_region: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'system_region'
  });
};
