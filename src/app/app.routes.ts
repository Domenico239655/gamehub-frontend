import { Routes } from '@angular/router';
import { TournamentsComponent } from './pages/tournaments/tournaments';
import { TournamentDetailComponent } from './pages/tournament-detail/tournament-detail';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/game';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'tornei', component : TournamentsComponent},
    {path: 'tournaments/:id', component: TournamentDetailComponent},
    {path:'giochi', component: GamesComponent}

];
