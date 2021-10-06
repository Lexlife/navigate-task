const postgres = require('postgres');
import { postgresCore } from '../../../Configs/LocalConfig';
import { DeviceI } from '../Entities/DeviceE';

const sql = postgres(postgresCore);

export class DeviceSQL {
  /** Получить информацию по устройству */
  public async getDeviceInfo(id: string): Promise<DeviceI[]> {
    let deviceInfo: DeviceI[] = []; // определить массив с информацией по устройству
    try {
      deviceInfo = await sql`
          SELECT *
          FROM public."Devices"
          where id = ${id}
      `;
    } catch (error) {
      console.error('Не удалось получить список девайсов', error);
    }
    console.info(deviceInfo);
    return deviceInfo;
  }

  /** Добавить устройство */
  public async addDevice(data: any): Promise<string> {
    try {
      await sql`
          insert INTO public."Devices" (mac, type, user_id, "createdAt")
          VALUES (${data.mac}, ${data.type}, ${data.user_id}, current_timestamp)
      `;
    } catch (error) {
      console.error('Не удалось добавить устройство', error);
    }
    return 'ok';
  }

  /** Удалить устройство */
  public async deleteDevice(id: number): Promise<string> {
    try {
      await sql`
          DELETE
          FROM public."Devices"
          WHERE id = ${id};
      `;
    } catch (error) {
      console.error('Не удалось добавить устройство', error);
    }
    return 'ok';
  }
}
