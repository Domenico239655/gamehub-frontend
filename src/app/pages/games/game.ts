import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameService } from '../../services/games.service';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './games.html',
  styleUrls: ['./games.css']
})
export class GamesComponent implements OnInit {
  
  games: any[] = [];

  constructor(
    private gameService: GameService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe({
      next: (data: any) => {
        console.log("GIOCHI DAL BACKEND:", data);
        this.games = data;
        this.cdr.detectChanges(); 
      },
      error: (err: any) => console.error("Errore caricamento giochi:", err)
    });
  }
}