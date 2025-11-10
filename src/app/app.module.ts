import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonRandomizerComponent } from './components/pokemon-randomizer/pokemon-randomizer.component';
import { PokemonTeamsComponent } from './components/pokemon-teams/pokemon-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonRandomizerComponent,
    PokemonTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
