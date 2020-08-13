import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { bookSearchReducer } from './state/book-search.reducer';
import { HelloComponent } from './hello.component';
import { BookSearchEffects } from './state/book-search.effects';
import { BookSearchStateService } from './state/book-search-state.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([BookSearchEffects]),
    StoreModule.forRoot({ bookSearch: bookSearchReducer })
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BookSearchStateService ],
})
export class AppModule { }
