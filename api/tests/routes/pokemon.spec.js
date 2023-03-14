/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
  image: 'PVO',
  life: '100',
  attack: '75',
  defense: '88',
  speed: '56',
  height: '7',
  weight: '69',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('debería obtener 200', () =>
      agent.get('/pokemons').expect(200)
    );
    it('should get 404', () => 
    agent.get('/pokemon').expect(404)
    );
    // it('debería obtener 200 por el nombre d epokemon', ()=> 
    // agent.get('/pokemons/name/Pikachu').expect(200)
    // );
  });
});
