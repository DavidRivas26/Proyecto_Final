/*this is the starting file for our server*/

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

/*this our first instance of our server*/
const app = express();
/*to enable the middleware on our express server*/
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

/*Aqui establecemos la conexion a la base de datos*/
/*esto es una promesa con lo cual podemos utilizar el .then*/

/*al momento de realizarse la promesa, estamos esperando a que se inicie el server, cuando se inicie lo hara en el puerto 5000 y mostrara el mensaje en consola.*/

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() =>
    app.listen(process.env.PORT,() => 
      console.log("listening")
    )
  )
  .catch((error)=>console.log(error));

  /*Index.js is the starting point for our server*/

  /*index.js follows routes for example: the auth route, or user, or Post. */

  /*models are the js schemas that our controllers will use to perform a specific type of functionality*/

  /*If we get to the auth route then we will reach the auth controller.*/
  /*index.js calls different of routes, this routes leads us to specific controllers, routes are the pathways to reach a specific controller*/

  /*Controllers are JS functions*/




