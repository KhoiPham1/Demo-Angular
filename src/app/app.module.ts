import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
