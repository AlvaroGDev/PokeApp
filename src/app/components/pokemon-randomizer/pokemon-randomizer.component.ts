import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonTeam } from '../../models/pokemon-team.interface';
import { FirestoreService } from '../../services/firestore.service';
import { doc } from '@firebase/firestore';
import { UtilitiesService } from '../../services/utilities.service';


@Component({
  selector: 'app-pokemon-randomizer',
  templateUrl: './pokemon-randomizer.component.html',
  styleUrl: './pokemon-randomizer.component.css'
})
export class PokemonRandomizerComponent {

  pokemon: Pokemon | null = null;
  team: PokemonTeam = {id: '', name: '', pokemons: [] };
 

  equipoPokemon: Pokemon[] = [];
  teamList: PokemonTeam[] = [];

  constructor(
    private pokemonService: PokemonService, 
    private firestoreService: FirestoreService, 
    public utilitiesService: UtilitiesService) { }

  ngOnInit() {
    this.randomizePokemon();
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