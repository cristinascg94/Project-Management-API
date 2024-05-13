// Import de dpendencias y archiuvos
const express = require ("express");
const { connectDB} = require('./src/utils/database');
const env = require("dotenv");

const routesPetition = require ('./src/api/routes/petition.routes')

//configuraciones variaas
env.config() // para trabajar con variables de entorno

// configurar el servidor
const server= express();
server.use(express.json());
connectDB();

// configuro el servidor con las rutas
server.use('/adt', routesPetition);

// ejecucion del servidor
const PORT= 3000;
server.listen(PORT, ()=>{
    console.log(`Escuchando por el puerto http://localhost:${PORT}`);
});