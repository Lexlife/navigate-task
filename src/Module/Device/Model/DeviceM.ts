import { DeviceR as R } from '../DevicesR';

/**
 * Устройства
 */
import { DeviceSQL } from '../../../Infrastructure/SQL/Repository/DeviceSQL';

export class DeviceM {
  private deviceSQL: DeviceSQL;

  constructor() {
    this.deviceSQL = new DeviceSQL();
  }

  /**
   * Получить информацию по устройству
   */
  public async getDeviceInfo(data: R.DeviceInfo.RequestI): Promise<R.DeviceInfo.ResponseI> {
    const listDevices = await this.deviceSQL.getDeviceInfo(data.id);
    return {
      device_info: listDevices
    };
  }

  /**
   * Добавить устройство
   */
  public async addDevice(data: R.AddDevice.RequestI): Promise<R.AddDevice.ResponseI> {
    const listDevices = await this.deviceSQL.addDevice(data);
    return {
      device_info: listDevices
    };
  }

  /**
   * Удалить устройство
   */
  public async deleteDevice(data: R.DeleteDevice.RequestI): Promise<R.DeleteDevice.ResponseI> {
    const listDevices = await this.deviceSQL.deleteDevice(data.id);
    return {
      device_info: listDevices
    };
  }
}
