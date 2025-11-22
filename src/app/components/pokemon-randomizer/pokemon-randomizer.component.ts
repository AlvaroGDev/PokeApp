import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../utils/models/pokemon.interface';
import { PokemonTeam } from '../../utils/models/pokemon-team.interface';
import { FirestoreService } from '../../services/firestore.service';
import { doc } from '@firebase/firestore';
import { UtilitiesService } from '../../services/utilities.service';
import { POKEMON_TYPE_NAMES } from '../../utils/constants/pokemon-types';


@Component({
  selector: 'app-pokemon-randomizer',
  templateUrl: './pokemon-randomizer.component.html',
  styleUrl: './pokemon-randomizer.component.css'
})
export class PokemonRandomizerComponent {

  pokemon: Pokemon | null = null;
  team: PokemonTeam = {id: '', name: '', pokemons: [] };
  POKEMON_TYPE_NAMES = POKEMON_TYPE_NAMES;
  selectedType: string = ''; // Variable para guardar el tipo seleccionado

  equipoPokemon: Pokemon[] = [];
  teamList: PokemonTeam[] = [];

  constructor(
    private pokemonService: PokemonService, 
    private firestoreService: FirestoreService, 
    public utilitiesService: UtilitiesService) { }

  ngOnInit() {
    this.randomizePokemon();
  }

  onRandomize() {
    // Si hay tipo seleccionado, usar randomizeByType; si no, usar randomizePokemon
    if (this.selectedType) {
      this.randomizeByType(this.selectedType);
    } else {
      this.randomizePokemon();
    }
  }

  randomizePokemon() {
    const randomPokedexNumber = Math.floor(Math.random() * 1025) + 1; // Son 1025 pokémon hasta la fecha
    this.pokemonService.getPokemon(randomPokedexNumber).subscribe(pokemonData => {
      this.pokemon = {
        id: pokemonData.id,
        name: pokemonData.name,
        sprites: {
          front_default: pokemonData.sprites.front_default
        },
        types: pokemonData.types
      };
    });
  }

  randomizeByType(selectedType: string) {
    if (!selectedType) return;

    this.pokemonService.getPokemonByType(selectedType).subscribe((typeData: any) => {
      const pokemonList = typeData?.pokemon || [];
      if (pokemonList.length === 0) {
        console.warn(`No Pokémon found for type: ${selectedType}`);
        return;
      }

      // Generar un número aleatorio entre 0 y la longitud de la lista
      const randomIndex = Math.floor(Math.random() * pokemonList.length);
      const selectedPokemonUrl = pokemonList[randomIndex].pokemon.url;

      // Extraer el ID del Pokémon desde la URL
      const pokemonId = selectedPokemonUrl.split('/').filter((el: string) => el).pop();

      // Obtener los datos completos del Pokémon
      this.pokemonService.getPokemon(parseInt(pokemonId)).subscribe((pokemonData: any) => {
        this.pokemon = {
          id: pokemonData.id,
          name: pokemonData.name,
          sprites: {
            front_default: pokemonData.sprites.front_default
          },
          types: pokemonData.types
        };
      });
    });
  }
  

  anadirPokemon(pokemon: Pokemon) {
    this.equipoPokemon.push(pokemon);
    this.randomizePokemon();
  }

  eliminarPokemon(index: number) {
    this.equipoPokemon.splice(index, 1);
  }

  async guardarEquipo(nombreEquipo: string, equipo: Pokemon[]) {

    this.team = {id: '',name: nombreEquipo, pokemons: equipo };
    this.teamList.push(this.team);

    try {
      await this.firestoreService.guardarEquipo(this.team);
      this.randomizePokemon();
      console.log('Equipo guardado en Firestore');

    } catch (error) {
      console.error('Error al guardar el equipo en Firestore:', error);
    }
    this.equipoPokemon = [];
    this.team = { id: '', name: '', pokemons: [] };
  }

}