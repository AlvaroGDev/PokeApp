import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonRandomizerComponent } from './components/pokemon-randomizer/pokemon-randomizer.component';
import { PokemonTeamsComponent } from './components/pokemon-teams/pokemon-teams.component';

  const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },  // ← Redirige a /pokemon
  { path: 'pokemon', component: PokemonRandomizerComponent },
  { path: 'equipos', component: PokemonTeamsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
