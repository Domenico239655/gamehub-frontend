import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Questo permette ad Angular di usarlo in tutta l'app senza configurazioni extra
})
export class GameService {

  // L'indirizzo del tuo backend Spring Boot dedicato ai giochi
  private apiUrl = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) { }

  // Metodo per recuperare tutti i giochi dal database
  getAllGames(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Esempio per il futuro: se vorrai i dettagli di un singolo gioco
  getGameById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}