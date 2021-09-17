import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtykulComponent } from './artykul/artykul.component';
import { KoszykComponentComponent } from './koszyk-component/koszyk-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { KoszykListaComponent } from './koszyk-lista/koszyk-lista.component';
import { FormularzComponent } from './formularz/formularz.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { CzerwonyTekstDirective } from './czerwony-tekst.directive';
import { ZoltyTekstDirective } from './zolty-tekst.directive';
import { AutoryzacjaDirective } from './autoryzacja.directive';
import { NiebieskiTekstDirective } from './niebieski-tekst.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArtykulComponent,
    KoszykComponentComponent,
    MenuComponent,
    KoszykListaComponent,
    FormularzComponent,
    LogowanieComponent,
    CzerwonyTekstDirective,
    ZoltyTekstDirective,
    AutoryzacjaDirective,
    NiebieskiTekstDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
