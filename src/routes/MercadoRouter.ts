import { Router } from 'express';

import { mercadoController }from '../Controller/MercadoController';


class MercadoRouter
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }
    config():void
    {
        this.router.get('/',mercadoController.pagoMercado);
        
    }
}
const mercadoRouter = new MercadoRouter();
export default mercadoRouter.router;