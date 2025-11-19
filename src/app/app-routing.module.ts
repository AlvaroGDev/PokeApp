import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonRandomizerComponent } from './components/pokemon-randomizer/pokemon-randomizer.component';
import { PokemonTeamsComponent } from './components/pokemon-teams/pokemon-teams.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

  const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },  // ← Redirige a /pokemon
  { path: 'pokemon', component: PokemonRandomizerComponent },
  { path: 'equipos', component: PokemonTeamsComponent },
  { path: 'pokedex', component: PokemonSearchComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
