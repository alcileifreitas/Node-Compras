import { Router } from  'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FornecedoresController from './controllers/FornecedoresController';
import ProdutosController from './controllers/ProdutosController';
import ComprasController from './controllers/ComprasController';

const routes = Router();
const upload = multer(uploadConfig);

//fornecedores
routes.post('/fornecedores', FornecedoresController.create);
routes.get('/fornecedores', FornecedoresController.index);
routes.get('/fornecedores/:id', FornecedoresController.show);
routes.put('/fornecedores/:id', FornecedoresController.update);
routes.delete('/fornecedores/:id', FornecedoresController.delete);

//produtos
routes.post('/produtos', ProdutosController.create);
routes.get('/produtos', ProdutosController.index);
routes.get('/produtos/:id', ProdutosController.show);
routes.put('/produtos/:id', ProdutosController.update);
routes.delete('/produtos/:id', ProdutosController.delete);

//compras
routes.post('/compras', ComprasController.create);
routes.get('/compras', ComprasController.index);
routes.get('/compras/:id', ComprasController.show);
routes.put('/compras/:id', ComprasController.update);
routes.delete('/compras/:id', ComprasController.delete);

export default routes;