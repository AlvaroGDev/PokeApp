import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../utils/models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {}
  
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemon(id: number){
    return this.httpClient.get<Pokemon>(`${this.apiUrl}${id}`);
  }

  getPokemonByType(type: string){
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/type/${type}`);
  }

  getallPokemon(){
    return this.httpClient.get<Pokemon[]>(`${this.apiUrl}?limit=100000&offset=0`);
  }
}
