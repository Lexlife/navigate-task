const { Model, Sequelize } = require('sequelize');

module.exports = () => {
  class Device extends Model {
    static associate(models) {
      // define association here
    }
  };
  Device.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    mac: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.ENUM('ble', 'wifi', 'locator', 'wifi_rtt'),
      comment: 'тип устройства (ble, wifi, locator, wifi_rtt)',
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
  return Device;
};

