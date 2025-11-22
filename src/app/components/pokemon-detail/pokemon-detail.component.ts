import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../utils/models/pokemon.interface';
import { PokemonCompleto } from '../../utils/models/pokemon-completo.interface';
import { UtilitiesService } from '../../services/utilities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

pokemonId: number | null = 0;
pokemon: PokemonCompleto | null = null;

constructor(private route: ActivatedRoute, private pokemonService: PokemonService, public utilitiesService: UtilitiesService, private router: Router) { }

ngOnInit() {

  this.route.paramMap.subscribe(params => {
    this.pokemonId = Number(params.get('id'));
    this.cargarPokemon(this.pokemonId);
  });
}

cargarPokemon(id: number) {
  this.pokemonService.getPokemon(id).subscribe(pokemonData => {
    this.pokemon = pokemonData as PokemonCompleto;
  });   
}

formatearPeso(peso: number): string {
  // Convertir 2000 → "200,0"
  return (peso / 10).toFixed(1).replace('.', ',');
}

goToPokemonDetail(pokemonId: number) {
    if (pokemonId) {
      this.router.navigate(['/pokemon', pokemonId]);
    } else {
      console.warn('Pokemon ID is undefined');
    }
}

irAnterior() {
  if (this.pokemonId && this.pokemonId > 1) {
    this.goToPokemonDetail(this.pokemonId - 1);
  }
}

irSiguiente() {
  if (this.pokemonId) {
    this.goToPokemonDetail(this.pokemonId + 1);
  }
}


}