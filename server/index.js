import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// файл настроек сервера
import { configServer } from './include/serverConfig.js';
// обработчик ошибок
import { errorOperation } from './middleware/errorOperation.js';

import watchRouter from './routes/watchRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import brandRouter from './routes/brandRoutes.js';

const app = express();

app.use(cors());
app.use(json()); 
app.use(express.urlencoded({ extended: true }));

// Подключение маршрутов
app.get('/', (req, res) => {
  res.send('Да, работаю');
});
app.use('/api/category', categoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/watch', watchRouter);

app.use(errorOperation);

const PORT = configServer.port;

mongoose.connect(configServer.db_connect_string)
.then(() =>{
  console.log("MongoDB connected successfully")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
})
.catch(err => console.error("MongoDB connection error:", err));
