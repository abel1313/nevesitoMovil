import { Request, Response} from 'express';


import SocketIO, { Socket } from 'socket.io';

class IndexController
{

    public index( req: Request, res:Response )
        {
            

            res.send("Index ");

        }
}


export const indexController = new IndexController();