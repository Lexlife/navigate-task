/**
 * Типы устройств
 */
export enum DeviceTypeT {
  ble = 'ble',
  wifi = 'wifi',
  locator = 'locator',
  wifi_rtt = 'wifi_rtt'
}

export interface DeviceI {
  id?: number, // уникальный id в БД
  mас?: number, // mac-адрес устройства
  type?: DeviceTypeT, // тип устройства
  user_id?: number, // id пользователя, которому принадлежит устройство
  created_at?: string // дата создания
}
