import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharitySearchService {
  private USER_KEY = '2911749363c70a35e06e6467d64ec46e';

  constructor (private http: HttpClient) { }

  search(searchTerm: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes/?orderBy=newest&q=${encodeURIComponent(searchTerm)}`,
    );
  }
}