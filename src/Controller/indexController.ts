import { Request, Response} from 'express';

import { server } from '../index';
import SocketIO, { Socket } from 'socket.io';

class IndexController
{

    public index( req: Request, res:Response )
        {
            const io = require('socket.io')(server);

            res.send("Index " + io.on('connection', (socket:Socket) => {
                console.log("io's ready");
                
                socket.on('Gola',(data:any) =>
                {
                    console.log(data+"goo");
                    
                });    
                
              }));        


        }
}


export const indexController = new IndexController();