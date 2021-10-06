module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'уникальный id в БД',
      },
      mac: {
        type: Sequelize.STRING,
        comment: 'mac-адрес устройства',
      },
      type: {
        type: Sequelize.ENUM('ble', 'wifi', 'locator', 'wifi_rtt'),
        comment: 'тип устройства (ble, wifi, locator, wifi_rtt)',
      },
      user_id: {
        type: Sequelize.INTEGER,
        comment: 'id пользователя, которому принадлежит устройство',
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        comment: 'дата создания',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Devices');
  },
};
