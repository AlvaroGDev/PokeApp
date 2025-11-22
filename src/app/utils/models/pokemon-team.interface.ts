import { Pokemon } from "./pokemon.interface";

export interface PokemonTeam {
    id: string; // Identificador único del equipo
    name: string; // Nombre del equipo
    pokemons: Pokemon[]; // Array de objetos Pokémon que forman el equipo
}   