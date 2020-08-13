import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { charitySearchReducer } from './state/charity-search.reducer';
import { HelloComponent } from './hello.component';
import { CharitySearchEffects } from './state/charity-search.effects';
import { CharitySearchStateService } from './state/charity-search-state.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CharitySearchEffects]),
    StoreModule.forRoot({ charity: charitySearchReducer })
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CharitySearchStateService ],
})
export class AppModule { }
