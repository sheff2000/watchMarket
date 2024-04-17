// набор маршрутов для работы с Брендами - хранятся в отдельной коллекции докоментов базы
// создание - обновление - удаление - чтение
import { Router } from 'express';
import brandController from '../controllers/brandController.js';

const brandRouter = Router();
console.log('router ...');
brandRouter.get('/', brandController.getBrendList);
brandRouter.post('/', brandController.addBrend);
//brandRouter.delete('/:id');
//brandRouter.patch('/:id');

export default brandRouter;