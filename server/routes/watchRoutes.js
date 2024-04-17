// набор маршрутов для работы с товарами (часами)
// создание - обновление - удаление - чтение
import { Router } from 'express';
import watchControllers from '../controllers/watchController.js';


const watchRouter = Router();

watchRouter.get('/', watchControllers.getAllWatchs);
watchRouter.post('/', watchControllers.add);
watchRouter.delete('/:id');
watchRouter.patch('/:id');

export default watchRouter;