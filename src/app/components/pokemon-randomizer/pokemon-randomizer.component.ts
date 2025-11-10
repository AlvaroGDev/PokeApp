import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonTeam } from '../../models/pokemon-team.interface';


@Component({
  selector: 'app-pokemon-randomizer',
  templateUrl: './pokemon-randomizer.component.html',
  styleUrl: './pokemon-randomizer.component.css'
})
export class PokemonRandomizerComponent {

  pokemon: Pokemon | null = null;
  team: PokemonTeam = { id: 0, name: '', pokemons: [] };
 

  equipoPokemon: Pokemon[] = [];
  teamList: PokemonTeam[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.randomizePokemon();
  }

  randomizePokemon() {
    const randomPokedexNumber = Math.floor(Math.random() * 1025) + 1; // Son 1025 pokémon hasta la fecha
    this.pokemonService.getPokemon(randomPokedexNumber).subscribe(pokemonData => {
      this.pokemon = pokemonData;
    });
  }

  anadirPokemon(pokemon: Pokemon) {
    this.equipoPokemon.push(pokemon);
  }

  eliminarPokemon(index: number) {
    this.equipoPokemon.splice(index, 1);
  }

  guardarEquipo(nombreEquipo: string, equipo: Pokemon[]) {
    this.team = { id: 1, name: nombreEquipo, pokemons: equipo };
    this.teamList.push(this.team);
    this.equipoPokemon = [];
    this.team = { id: 0, name: '', pokemons: [] };
  }
}