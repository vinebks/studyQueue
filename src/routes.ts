import { Router } from 'express';
import CreateTransactionsRoutes from '@apps/CreateTransaction/routes';

const routes = Router();

routes.use(`/transactions`, CreateTransactionsRoutes);

export default routes;
