import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrl: './pokemon-search.component.css'
})
export class PokemonSearchComponent {

 constructor (private pokemonservice: PokemonService, private router: Router) {}

 todosPokemon: Pokemon[] = [];
 pokemonFiltrado: Pokemon[] = [];
  filtro: string = '';


  ngOnInit() {
    this.cargarNombresPokemon();
  }

  cargarNombresPokemon() {
    this.pokemonservice.getallPokemon().subscribe((response: any) => {
      this.todosPokemon = response.results.map((pokemon: any) => {
        const id = pokemon.url.split('/').filter((el: string) => el).pop();
        return {
          id: parseInt(id),
          name: pokemon.name,
          sprites: {
            front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          },
          types: []
        };
      });
    });
  } 
  
  filtrarPokemon(filtro: string) {
 if (!filtro) {
   this.pokemonFiltrado = [];
   return;
 }
 this.pokemonFiltrado = this.todosPokemon.filter(p => p.name.includes(filtro.toLowerCase())).slice(0,10);
}

  verDetalle(id: number) {
   this.router.navigate(['/pokemon', id]);
  }
}
