import mysql from 'promise-mysql';
import credenciales from './credenciales';

const pool = mysql.createPool(credenciales.database);


pool.getConnection()
.then(connection =>
    {
        pool.releaseConnection(connection);
        console.log("Conexión establecida");
    });

    export default pool;