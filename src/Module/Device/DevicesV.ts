import { DeviceTypeT } from '../../Infrastructure/SQL/Entities/DeviceE';

interface ValidDeviceI {
  id_device: number,
  mac: number,
  type: DeviceTypeT,
  user_id: number
}

export namespace DeviceV {
  /** Добаавить устройство */
  export function addDevice(data: ValidDeviceI): ValidDeviceI {
    let validData;
    if (typeof data.mac === 'number' && typeof data.user_id === 'number') {
      validData = data;
    } else {
      console.error('Ошибка добавления данных в таблицу');
    }
    return validData;
  }
}
