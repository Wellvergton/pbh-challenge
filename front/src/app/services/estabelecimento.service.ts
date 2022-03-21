import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../shared/estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient) { }

  listEstabelecimentos(): Observable<Array<Estabelecimento>> {
    return this.http.get<Array<Estabelecimento>>('http://localhost:8080/estabelecimento/list');
  }

  getEstabelecimento(id: number): Observable<Estabelecimento> {
    return this.http.get<Estabelecimento>('http://localhost:8080/estabelecimento/' + id);
  }

  saveEstabelecimento(estabelecimento: Estabelecimento): Observable<HttpResponse<Estabelecimento>> {
    return this.http.post<Estabelecimento>(
      'http://localhost:8080/estabelecimento/',
      estabelecimento,
      { observe: 'response' }
    );
  }

  updateEstabelecimento(id: number, estabelecimento: Estabelecimento): Observable<HttpResponse<Estabelecimento>> {
    return this.http.put<Estabelecimento>(
      'http://localhost:8080/estabelecimento/',
      estabelecimento,
      { observe: 'response' }
    );
  }

  deleteEstabelecimento(id: number): Observable<any> {
    return this.http.delete(
      'http://localhost:8080/estabelecimento/' + id,
      { withCredentials: true, observe: 'response' }
    );
  }
}
