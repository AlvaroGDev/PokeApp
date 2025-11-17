import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { PokemonTeam } from '../../models/pokemon-team.interface';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-pokemon-teams',
  templateUrl: './pokemon-teams.component.html',
  styleUrl: './pokemon-teams.component.css'
})

export class PokemonTeamsComponent implements OnInit {

  teamList: PokemonTeam[] = [];

  constructor(private firestoreService: FirestoreService, public utilitiesService: UtilitiesService) { }

  async ngOnInit() {
  await this.cargarEquipos();
  }

  async cargarEquipos() {
    try {
      this.teamList = await this.firestoreService.obtenerEquipos() as PokemonTeam[];
      console.log('Equipos cargados desde Firestore');
    } catch (error) {
      console.error('Error al cargar los equipos desde Firestore:', error);
    }
  }

  async eliminarEquipo(id: string) {
    try {
      await this.firestoreService.eliminarEquipo(id);
      console.log('Equipo eliminado de Firestore');
      await this.cargarEquipos(); // Recargar la lista de equipos después de eliminar
    } catch (error) {
      console.error('Error al eliminar el equipo de Firestore:', error);
    }
  }

}
