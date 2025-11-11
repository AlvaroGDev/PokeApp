import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';  


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
    return equiposSnapshot.docs.map(doc => doc.data());
  }
}
