import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { charityReducer } from './state/charity.reducer';
import { HelloComponent } from './hello.component';
import { CharityStateService } from './state/charity-state.service';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    StoreModule.forRoot({ charity: charityReducer })
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ CharityStateService ],
})
export class AppModule { }
