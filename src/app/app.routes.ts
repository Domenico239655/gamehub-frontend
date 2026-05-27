import { Routes } from '@angular/router';
import { TournamentsComponent } from './pages/tournaments/tournaments';
import { TournamentDetailComponent } from './pages/tournament-detail/tournament-detail';

export const routes: Routes = [
    { path: '', component : TournamentsComponent},
    {path: 'tournaments/:id', component: TournamentDetailComponent}
];
