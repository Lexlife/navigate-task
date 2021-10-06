import * as conf from './LocalConfig';
import { postgresCore } from './LocalConfig';

export const common = conf.common; // Общие настройки

export const core = conf.postgresCore; // Подключение к базе postgres
