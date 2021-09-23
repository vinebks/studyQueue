import { Router } from 'express';
import * as controller from './createTransaction.Controller';

const routes = Router();

routes.get(`/`, controller.searchTransaction);

export default routes;
