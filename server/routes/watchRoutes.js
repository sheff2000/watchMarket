// набор маршрутов для работы с товарами (часами)
// создание - обновление - удаление - чтение
import { Router } from 'express';
import watchControllers from '../controllers/watchController.js';


const watchRouter = Router();

watchRouter.get('/', watchControllers.getAllWatchs);
watchRouter.post('/', watchControllers.add);
watchRouter.delete('/:id', watchControllers.deleteWatch);
watchRouter.patch('/:id', watchControllers.updateWatch);
watchRouter.get('/brand/:brandId', watchControllers.getWatchesByBrand);

export default watchRouter;