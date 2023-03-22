import { ALL_POKEMONS,DELETE_POKEMON,
         SORT_POKEMON,
         SORT_ATTACK_LEVEL,
         DELETE_POKEMON_ERROR,
         SORT_DEFENSE_LEVEL,
         SORT_SPEED_LEVEL,
         LEGENDARY_POKE 
        } from "./antion_type";

const initialState = {
  allPokemons: [],
  sortDirection: "asc", // por defecto, ordenar de la A a la Z
  allLegendary: [],
  initialPokemons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POKEMONS:
  const allPokemons = action.payload;
  const initialPokemons = allPokemons.filter(pokemon => pokemon.id <= 151);
  return {
    ...state,
    allPokemons: allPokemons,
    initialPokemons: initialPokemons,
      };
      case DELETE_POKEMON:
      const newPokemons = state.allPokemons.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      return {
        ...state,
        allPokemons: newPokemons
      };
    case DELETE_POKEMON_ERROR:
      return {
        ...state,
        error: action.payload
      };
      case LEGENDARY_POKE:
        return{
          ...state,
          allLegendary: action.payload
        }
      case SORT_POKEMON:
      const { sortDirection } = state;
      const sortedPokemons = state.allPokemons.slice().sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (nameA > nameB) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      });
      const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
      return {
        ...state,
        allPokemons: sortedPokemons,
        sortDirection: newSortDirection
      };
    case SORT_ATTACK_LEVEL:
      const { sortDirection: direction } = state;
      const sortedByAttackLevel = state.allPokemons.slice().sort((a, b) => {
        if (a.attack < b.attack) {
          return direction === "asc" ? 1 : -1;
        }
        if (a.attack > b.attack) {
          return direction === "asc" ? -1 : 1;
        }
        return 0;
      });
      const newSortDir = direction === "asc" ? "desc" : "asc";
      return {
        ...state,
        allPokemons: sortedByAttackLevel,
        sortDirection: newSortDir
      };
    case SORT_DEFENSE_LEVEL:
      const { sortDirection: dir } = state;
      const sortedByDefenseLevel = state.allPokemons.slice().sort((a, b) => {
        if (a.defense < b.defense) {
          return dir === "asc" ? 1 : -1;
        }
        if (a.defense > b.defense) {
          return dir === "asc" ? -1 : 1;
        }
        return 0;
      });
      const newSortDirDef = dir === "asc" ? "desc" : "asc";
      return {
        ...state,
        allPokemons: sortedByDefenseLevel,
        sortDirection: newSortDirDef
      };
      case SORT_SPEED_LEVEL:
  const sortedBySpeedLevel = state.allPokemons.slice().sort((a, b) => {
    if (a.speed < b.speed) {
      return state.sortDirection === "asc" ? -1 : 1;
    }
    if (a.speed > b.speed) {
      return state.sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });
  const newSortDirectionSpeed = state.sortDirection === "asc" ? "desc" : "asc";
  return {
    ...state,
    allPokemons: sortedBySpeedLevel,
    sortDirection: newSortDirectionSpeed
  };

    default:
      return state;
  }
};

export default reducer;
