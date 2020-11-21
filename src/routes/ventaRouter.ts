import { Router } from 'express';

import ventaController from '../Controller/ventaController';

class VentaRouter
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.get('/',ventaController.venta);
    }
}
const ventaRouter = new VentaRouter();
export default ventaRouter.router;