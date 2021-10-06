import express from 'express';
import * as conf from './Configs/LocalConfig';
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));
app.use(bodyParser.json({ limit: '40mb' }));

// получить список девайсов
import * as DevicesCtrl from './Module/Device/DevicesCtrl';
app.use(DevicesCtrl.router);

app.listen(conf.common.port, () => {
  console.info(`
  
 █████╗ ██████╗ ██╗
██╔══██╗██╔══██╗██║
███████║██████╔╝██║
██╔══██║██╔═══╝ ██║
██║  ██║██║     ██║
╚═╝  ╚═╝╚═╝     ╚═╝
  
  `);
});
console.info(`Server start at ${conf.common.port} port.`);
