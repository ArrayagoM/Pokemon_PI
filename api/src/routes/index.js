const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonRoute =  require ('./pokemonRoute');
const types = require('./typeRoute');
const favorite = require('./favoritesRoute');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRoute);
router.use('/types', types);
router.use('/fav',favorite);
  
  

module.exports = router;
