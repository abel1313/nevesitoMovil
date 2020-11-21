import { Socket } from "socket.io";

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req: Request, res: Response) => {
  
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});





// npm para convertir el codigo de typescript a JavaScript con npm run build
// build es un codigo que es el encargado de convertir automaticamente el codigo
// se configtura en el package.json y un comando que es el build con tsc -w
// comando en la terminal npm run buil


// el modulo nodemos ejecuta el codigo automaticamenta para no estar ejecuentado un comando cada ves que
// queramos ver los cambios de Javascript en el el package agrefamos otro comando dev : nodemon build
// y en la consola ejecutamos npm run dev