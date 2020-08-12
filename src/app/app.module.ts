import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { charitySearchReducer } from './state/charity-search.reducer';
import { HelloComponent } from './hello.component';
import { CharitySearchStateService } from './state/charity-search-state.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    StoreModule.forRoot({ charity: charitySearchReducer })
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CharitySearchStateService ],
})
export class AppModule { }
