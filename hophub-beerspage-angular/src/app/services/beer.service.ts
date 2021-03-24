import { Observable } from 'rxjs';
import { Beer } from 'src/app/models/beer';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://brj-server.herokuapp.com/api/beers');
  }

  get(id: string): Observable<Beer> {
    return this.http.get<Beer>(
      `https://brj-server.herokuapp.com/api/beers/${id}`
    );
  }
}
