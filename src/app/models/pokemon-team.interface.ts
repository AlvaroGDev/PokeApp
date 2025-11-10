import { Pokemon } from "./pokemon.interface";

export interface PokemonTeam {
    id: number; // Identificador único del equipo
    name: string; // Nombre del equipo
    pokemons: Pokemon[]; // Array de objetos Pokémon que forman el equipo
}   