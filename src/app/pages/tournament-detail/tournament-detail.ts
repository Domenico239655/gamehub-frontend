import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tournament-detail.html',
  styleUrls: ['./tournament-detail.css']
})


export class TournamentDetailComponent implements OnInit {

  tournament: any;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tournamentService.getTournamentById(id).subscribe({
      next : (data : any) => {
      this.tournament = data;
      console.log("DETTAGLI TORNEO:", data);
      }, 
      error: (err) => console.error("Errore nel caricamento dei dettagli: ", err)
    });
  }
}
