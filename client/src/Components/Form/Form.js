import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css';
import { createPokemon } from '../../reducer/action';

const types = [
  "Hierba",
  "Veneno",
  "Fuego",
  "Volador",
  "Agua",
  "Bicho",
  "Normal",
  "Eléctrico",
  "Tierra",
  "Hada",
  "Lucha",
  "Psíquico",
  "Roca",
  "Acero",
  "Hielo",
  "Fantasma",
  "Dragón",
  "Siniestro",
  "ninguno"
];

const Form = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    isLegendari: false,
    types: []
  });

  const options = types.map((type, index) => (
    <option key={index} value={type}>{type}</option>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    const pokemonExists = allPokemons.some(pokemon => pokemon.name.toLowerCase() === formData.name.toLowerCase());

    if (pokemonExists) {
      alert(`El pokemon ${formData.name} ya existe.`);
      return;
    }

  

    dispatch(createPokemon(formData));

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      types: selectedOptions
    }));
  };

  return (
    <form id="create-pokemon-form" className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="name" className={styles.label}>Nombre:</label>
    <input type="text" id="name" name="name" required className={styles.input} onChange={handleChange} />

    <label htmlFor="image" className={styles.label}>Imagen:</label>
    <input type="text" id="image" name="image" required className={styles.input} onChange={handleChange} />

    <label htmlFor="life" className={styles.label}>Vida:</label>
    <input type="number" id="life" name="life" required className={styles.input} onChange={handleChange} />

    <label htmlFor="attack" className={styles.label}>Ataque:</label>
    <input type="number" id="attack" name="attack" required className={styles.input} onChange={handleChange} />

    <label htmlFor="defense" className={styles.label}>Defensa:</label>
    <input type="number" id="defense" name="defense" required className={styles.input} onChange={handleChange} />

    <label htmlFor="speed" className={styles.label}>Velocidad:</label>
    <input type="number" id="speed" name="speed" className={styles.input} onChange={handleChange} />

    <label htmlFor="height" className={styles.label}>Altura:</label>
    <input type="number" id="height" name="height" className={styles.input} onChange={handleChange} />

    <label htmlFor="weight" className={styles.label}>Peso:</label>
    <input type="number" id="weight" name="weight" className={styles.input} onChange={handleChange} />

    <label htmlFor="types" className={styles.label}>Tipo:</label>
    <select id="types" name="types[]" multiple className={styles.select} onChange={handleSelectChange}>
        {options}
    </select>
    <label htmlFor="types" className={styles.label}>Tipo:</label>
    <select id="types" name="types[]" multiple className={styles.select} onChange={handleSelectChange}>
        {options}
    </select>

    <button type="submit" className={styles.button}>Crear Pokemon</button>

    </form>
  );
};

export default Form;
