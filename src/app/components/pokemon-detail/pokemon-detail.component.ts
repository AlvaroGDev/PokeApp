import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonCompleto } from '../../models/pokemon-completo.interface';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

pokemonId: number | null = 0;
pokemon: PokemonCompleto | null = null;

constructor(private route: ActivatedRoute, private pokemonService: PokemonService, public utilitiesService: UtilitiesService) { }

ngOnInit() {

  this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
  this.cargarPokemon(this.pokemonId);
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

}