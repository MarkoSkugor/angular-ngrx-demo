import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharitySearchService {
  private USER_KEY = '2911749363c70a35e06e6467d64ec46e';
  constructor (private http: HttpClient) {}

  search(seachTerm: string) {
    return this.http.get(`http://data.orghunter.com/v1/charitysearch?user_key=${this.USER_KEY}&searchTerm=${encodeURIComponent(searchTerm)}`);
  }
}