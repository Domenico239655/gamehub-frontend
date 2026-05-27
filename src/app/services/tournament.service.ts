import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {

  constructor(private http: HttpClient) {}

  getAllTournaments() {
    return this.http.get(`${environment.apiUrl}/tournaments`);
  }
  getTournamentById(id: any) {
  return this.http.get(`${environment.apiUrl}/tournaments/${id}`);
}

}

