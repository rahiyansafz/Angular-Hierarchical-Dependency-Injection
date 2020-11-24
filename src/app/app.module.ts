import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }           from './app.component';
import { HeroTaxReturnComponent } from './hero-tax-return.component';
import { HeroesListComponent }    from './heroes-list.component';
import { VillainsListComponent }  from './villains-list.component';

import { carComponents } from './car.components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    carComponents,
    HeroesListComponent,
    HeroTaxReturnComponent,
    VillainsListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/