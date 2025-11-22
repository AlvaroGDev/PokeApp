import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  getTypeColor(type: string): string {

  const colors: { [key: string]: string } = {
    'fire': 'bg-red-500 text-white',
    'water': 'bg-blue-500 text-white',
    'grass': 'bg-green-500 text-white',
    'electric': 'bg-yellow-400 text-black',
    'psychic': 'bg-pink-500 text-white',
    'ice': 'bg-cyan-500 text-white',
    'dragon': 'bg-indigo-500 text-white',
    'dark': 'bg-gray-800 text-white',
    'fairy': 'bg-pink-300 text-white',
    'normal': 'bg-orange-200 text-black',
    'fighting': 'bg-orange-700 text-white',
    'flying': 'bg-blue-300 text-black',
    'poison': 'bg-purple-700 text-white',
    'ground': 'bg-yellow-600 text-white',
    'rock': 'bg-yellow-800 text-white',
    'bug': 'bg-green-700 text-white',
    'ghost': 'bg-purple-700 text-white',
    'steel': 'bg-gray-500 text-white'
  };
  
  return colors[type] || 'bg-gray-200 text-gray-800';
} 

obtenerColorStat(statName: string): string {
  const colors: { [key: string]: string } = {
    'hp': 'bg-red-500',           // HP - Rojo
    'attack': 'bg-orange-500',    // Ataque - Naranja
    'defense': 'bg-blue-500',     // Defensa - Azul
    'special-attack': 'bg-purple-500',  // Ataque Especial - Morado
    'special-defense': 'bg-green-500',  // Defensa Especial - Verde
    'speed': 'bg-yellow-500'      // Velocidad - Amarillo
  };
  
  return colors[statName] || 'bg-gray-500';
}

}