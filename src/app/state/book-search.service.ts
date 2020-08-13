import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  constructor (private http: HttpClient) { }

  search(searchTerm: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes/?orderBy=newest&q=${encodeURIComponent(searchTerm)}`,
    );
  }
}