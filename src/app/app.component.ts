import { Component, VERSION } from '@angular/core';
import { BookSearchStateService } from './state/book-search-state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  searchTerm: '';

  constructor(private bookSearchStateService: BookSearchStateService) { }

  search() {
    this.bookSearchStateService.searchCharities(this.searchTerm);
  }
}
