import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie.dto';

@Injectable({
  providedIn: 'root',
})

export class MovieService {

  private apiUrl= 'http://localhost:9090/api/film';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}/findall`);
  }
}
