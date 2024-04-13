// набор маршрутов для работы с актегориями
// создание - обновление - удаление - чтение
import { Router } from 'express';
import categoryController from '../controllers/categoryController';

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategorys);
//categoryRouter.post('/');
//categoryRouter.delete('/:id');
//categoryRouter.patch('/:id');

export default categoryRouter;