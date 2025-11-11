import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonRandomizerComponent } from './components/pokemon-randomizer/pokemon-randomizer.component';
import { PokemonTeamsComponent } from './components/pokemon-teams/pokemon-teams.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    PokemonRandomizerComponent,
    PokemonTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent]
})
export class AppModule { }
