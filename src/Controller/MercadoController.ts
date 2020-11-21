import { Request, Response} from 'express';
import MercadoPago from '../routes/mercadoPago';


class MercadoController
{

    public pagoMercado( req: Request, res:Response )
        {
            res.send(MercadoPago);
        }
}

export const mercadoController = new MercadoController();