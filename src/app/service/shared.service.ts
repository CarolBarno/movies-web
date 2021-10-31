import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public baseUrl: string = environment.apiUrl;
  public apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }


  get(route: string, data?: any) {
    const url = this.baseUrl + route + this.apiKey;
    let params = new HttpParams();

    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(url, { params: params }).pipe(
      map((response: any) => response)
    );
  }

  getTopMovies() {
    return this.get('/Top250Movies/');
  }

  getTopTvs() {
    return this.get('/Top250TVs/');
  }

  getComingSoon() {
    return this.get('/ComingSoon/');
  }

  getInTheaters() {
    return this.get('/InTheaters/');
  }

  getPopularTvs() {
    return this.get('/MostPopularTVs/');
  }

  getPopularMovies() {
    return this.get('/MostPopularMovies/');
  }

  searchMovie(query: any) {


  }


  searchBooks(query: string) {
    return this.get('/search.json', { title: query });
  }


}
