export const getTypeClass = (type) => {
    switch (type) {
      case "normal":
        return "normal";
      case "grass":
      case "grass, flying":
      case "grass, poison":
      case "grass, psychic":
        return "grass";
      case "fire":
      case "fire, flying":
        return "fire";
      case "water":
      case "water, ground":
      case "water, fairy":
      case "water, electric":
      case "water, flying":
      case "water, fighting":
      case "water, poison":
      case "water, psychic":
      case "water, ice":
        return "water";
      case "electric":
      case "electric, flying":
      case "electric, steel":
        return "electric";
      case "ice":
      case "ice, flying":
      case "ice, psychic":
        return "ice";
        case "flying":
      case "normal, flying":
      case "flying, psychic":
      case "flying, bug":
      case "flying, rock":
      case "flying, dragon":
      case "flying, dark":
      case "flying, fairy":
      case "flying, electric":
      case "flying, ice":
        return "flying";
      case "fighting":
        return "fighting";
      case "poison":
      case "poison, ground":
      case "poison, flying":
      case "poison, bug":
      case "poison, ghost":
      case "poinson, dragon":
        return "poison";
      case "ground":
      case "ground, flying":
      case "ground, rock":
      case "steel, ground":
        return "ground";
      case "psychic":
      case "psychic, fairy":
        return "psychic";
      case "bug":
      case "bug, steel":
      case "bug, grass":
      case "bug, poison":
        return "bug";
      case "rock":
      case "rock, water":
      case "rock, ground":
      case "rock, flying":
        return "rock";
      case "ghost":
      case "ghost, poison":
        return "ghost";
      case "dragon":
      case "dragon, flying":
        return "dragon";
      case "dark":
        return "dark";
      case "steel":
        return "steel";
      case "fairy":
      case "normal, fairy":
        return "fairy";
      default:
        return "";
    }
  };
  

  