import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { PokemonTeam } from '../../models/pokemon-team.interface';

@Component({
  selector: 'app-pokemon-teams',
  templateUrl: './pokemon-teams.component.html',
  styleUrl: './pokemon-teams.component.css'
})

export class PokemonTeamsComponent implements OnInit {

  teamList: PokemonTeam[] = [];

  constructor(private firestoreService: FirestoreService) { }

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

}
