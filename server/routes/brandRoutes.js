// набор маршрутов для работы с Брендами - хранятся в отдельной коллекции докоментов базы
// создание - обновление - удаление - чтение
import { Router } from 'express';
import brandController from '../controllers/brandController.js';

const brandRouter = Router();
console.log('router ...');
//categoryRouter.get('/', categoryController.getAllCategorys);
brandRouter.post('/', brandController.addBrend);
//categoryRouter.delete('/:id');
//categoryRouter.patch('/:id');

export default brandRouter;