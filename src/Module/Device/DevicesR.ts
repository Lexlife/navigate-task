import { DeviceI, DeviceTypeT } from '../../Infrastructure/SQL/Entities/DeviceE';

export namespace DeviceR {
  /**
   * Получить информацию по устройству
   */
  export namespace DeviceInfo {
    /** APIURL */
    export const route = '/device/:id';

    /** Параметры api запроса */
    export interface RequestI {
      id: string;
    }

    /** Параметры api ответа */
    export interface ResponseI {
      device_info: DeviceI[];
    }
  }

  /**
   * Добавить устройство
   */
  export namespace AddDevice {
    /** APIURL */
    export const route = '/device';

    /** Параметры api запроса */
    export interface RequestI {
      id_device: number,
      mac: number,
      type: DeviceTypeT,
      user_id: number
    }

    /** Параметры api ответа */
    export interface ResponseI {
      // ответ не предусмотрен
    }
  }

  /**
   * Удалить устройство
   */
  export namespace DeleteDevice {
    /** APIURL */
    export const route = '/device';

    /** Параметры api запроса */
    export interface RequestI {
      id: number
    }

    /** Параметры api ответа */
    export interface ResponseI {
      // ответ не предусмотрен
    }
  }
}
