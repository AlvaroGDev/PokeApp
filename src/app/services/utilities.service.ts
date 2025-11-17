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
    'bug': 'bg-green-900 text-white',
    'ghost': 'bg-purple-700 text-white',
    'steel': 'bg-gray-500 text-white'
  };
  
  return colors[type] || 'bg-gray-200 text-gray-800';
} 

}