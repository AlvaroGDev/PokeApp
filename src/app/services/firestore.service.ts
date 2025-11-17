import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, deleteDoc, doc } from '@angular/fire/firestore';
import { PokemonTeam } from '../models/pokemon-team.interface';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  async guardarEquipo(equipo: any) {
    const equiposCollection = collection(this.firestore, 'equipos');
    return await addDoc(equiposCollection, equipo);
  }

  async obtenerEquipos() {

    const equiposCollection = collection(this.firestore, 'equipos');
    const equiposSnapshot = await getDocs(equiposCollection);

    return equiposSnapshot.docs.map(doc => ({ 
      id: doc.id,
      name: doc.data()['name'],
      pokemons: doc.data()['pokemons']
      })) as PokemonTeam[];
  }

  async eliminarEquipo(id: string) {

      await deleteDoc(doc(this.firestore, 'equipos', id));
  }

}
