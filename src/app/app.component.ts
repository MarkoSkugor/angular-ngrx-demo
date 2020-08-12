import { Component, VERSION } from '@angular/core';
import { CharitySearchStateService } from './state/charity-search-state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  searchTerm: '';

  constructor(private charitySearchStateService: CharitySearchStateService) { }

  search() {
    this.charitySearchStateService.searchCharities(this.searchTerm);
  }
}
