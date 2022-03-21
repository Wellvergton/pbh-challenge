import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Profissional } from '../shared/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http: HttpClient) { }

  listProfissionais(): Observable<Array<Profissional>> {
    return this.http.get<Array<Profissional>>('http://localhost:8080/profissional/list');
  }

  getProfissional(id: number): Observable<Profissional> {
    return this.http.get<Profissional>('http://localhost:8080/profissional/' + id)
  }

  saveProfissional(profissional: Profissional): Observable<HttpResponse<Profissional>> {
    return this.http.post<Profissional>(
      'http://localhost:8080/profissional',
      profissional,
      { observe: 'response' }
    );
  }

  updateProfissional(id: number, profissional: Profissional): Observable<HttpResponse<Profissional>> {
    return this.http.put<Profissional>(
      'http://localhost:8080/profissional/' + id,
      profissional,
      { withCredentials: true, observe: 'response' }
    );
  }

  deleteProfissional(id: number): Observable<any> {
    return this.http.delete(
      'http://localhost:8080/profissional/' + id,
      { withCredentials: true, observe: 'response' }
    );
  }
}
