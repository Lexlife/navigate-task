// Данные конфигурации являются локальными и добавлены в .gitignore

/**
 * postgres
 */
export const postgresCore = {
  URL: 'jdbc:postgresql://localhost:5432/postgres',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'dbadm',
  password: 'Dbadm123!'
};

/** Общие настройки приложения */
export const common = {
  port: 3005 // порт на котором будет работать Node.js
};
