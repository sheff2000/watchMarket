import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// файл настроек сервера
import { configServer } from './include/configService.js';
// обработчик ошибок
import { errorOperation } from './middleware/errorOperation.js';

import watchRouter from './routes/watchRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(json()); 
app.use(express.urlencoded({ extended: true }));

// Подключение маршрутов
app.use('/api/category', categoryRouter);
// app.use('/api/brand', );
app.use('/api/watch', watchRouter);

app.use(errorOperation);

const PORT = configServer.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
