import express from 'express';
import { DeviceR as R } from './DevicesR';
import { DeviceM } from './Model/DeviceM';
import { DeviceV } from './DevicesV';
import { DeviceTypeT } from '../../Infrastructure/SQL/Entities/DeviceE';

const router = express.Router();

export class DevicesCtrl {
  public deviceM: DeviceM;

  /**
   * Инициализация
   */
  async faInit(): Promise<void> {
    this.deviceM = new DeviceM();
  }
}

/**
 * Получить девайс по ID
 */
router.get(R.DeviceInfo.route, async (req) => {
  const ctrl = new DevicesCtrl();
  await ctrl.faInit();
  await ctrl.deviceM.getDeviceInfo(req.params);
});

/**
 * Добавить устройство
 */
router.post(R.AddDevice.route, async (req) => {
  const ctrl = new DevicesCtrl();
  await ctrl.faInit();
  const validData: { id_device: number, mac: number, type: DeviceTypeT, user_id: number } = DeviceV.addDevice(req.body);
  await ctrl.deviceM.addDevice(validData);
});

/**
 * Удалить устройство
 */
router.delete(R.DeleteDevice.route, async (req) => {
  const ctrl = new DevicesCtrl();
  await ctrl.faInit();
  await ctrl.deviceM.deleteDevice(req.body);
});

export { router };
