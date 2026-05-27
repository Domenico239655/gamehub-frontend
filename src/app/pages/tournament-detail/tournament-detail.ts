import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../../services/tournament.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-detail',
  standalone: true,
  imports: [CommonModule],
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
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.getTournamentById(id).subscribe(data => {
      this.tournament = data;
      console.log("DETTAGLI TORNEO:", data);
    });
  }
}
