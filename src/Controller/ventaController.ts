import { Request, Response} from 'express';

import pool from '../routes/conexion';


class VentaController
{

    public async venta( req: Request, res:Response )
        {
            const productos = await pool.query("SELECT * from usuario");
            res.json(productos);
        }
}

const ventaController = new VentaController();
export default ventaController;