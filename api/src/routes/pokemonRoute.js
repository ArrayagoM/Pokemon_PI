require('dotenv').config();
const { Router } = require('express');
const { Op } = require('sequelize');
const { API_URL } = process.env
const { Pokemon, Type, Pokemon_Type } = require('../db');
const { allPokemons, createPokemon, idPokemon } = require('../controller/allPokemon');

const router = Router();


router.get('/', async (req, res) => {
    try {
      const dataPoke = await allPokemons();
      res.status(200).json(dataPoke);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  });

  router.get('/name/:name', async (req, res) => {
    try {
      const { name } = req.params;
      const namePokemon = await Pokemon.findOne({
        where: {
          name: {
            [Op.iLike]: `%${name}%`
          }
        },
        include: {
          model: Type,
          through: Pokemon_Type
        }
      });


   
      
  
      const response = await fetch(API_URL+name);
      const data = await response.json();
  
      if (namePokemon || data.id) {
        const pokemon = {
          name: namePokemon ? namePokemon.name : data.name,
          id: data.id,
          image: data.sprites.front_default,
          types: namePokemon ? namePokemon.types : data.types.map(t => t.type.name),
          life: namePokemon ? namePokemon.life : null,
          attack: namePokemon ? namePokemon.attack : null,
          defense: namePokemon ? namePokemon.defense : null,
          speed: namePokemon ? namePokemon.speed : null,
          height: namePokemon ? namePokemon.height : null,
          weight: namePokemon ? namePokemon.weight : null,
        };
        res.status(200).json(pokemon);
      } else {
        res.status(404).send({ error: 'No se encontró el pokemon' });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
  
  

  router.get('/:id', async (req, res)=> {
    try {
        const id = await idPokemon(req.params.id);
        res.status(200).json(id);
    } catch (error) {
        res.status(404).send({error: error.message});
    }
  })
  

  router.post('/', async (req, res) => {
    try {
        const { name, image, life, attack, defense, speed, height, weight } = req.body
        if(!name || !image || !life || !attack || !defense ) throw new Error('Faltan datos')
      const newPokemon = await createPokemon({
        name,
        image, 
        life, 
        attack, 
        defense, 
        speed, 
        height, 
        weight
    });
      res.status(201).json(newPokemon);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, image, life, attack, defense, speed, height, weight } = req.body;
  
      const updatedPokemon = await Pokemon.update(
        { name, image, life, attack, defense, speed, height, weight },
        { where: { id } }
      );
  
      if (updatedPokemon[0] === 0) throw new Error('El pokemon no existe');
  
      res.status(200).json({ message: 'Pokemon actualizado correctamente' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });


  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedRows = await Pokemon.destroy({ where: { id } });
  
      if (deletedRows === 0) throw new Error('El pokemon no existe');
  
      res.status(200).json({ message: 'Pokemon eliminado correctamente' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });
  
  


module.exports = router;