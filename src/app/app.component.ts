import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artykul } from 'src/models/artykul';
import { ArtykulyServiceService, Stronnicowanie } from './artykuly-service.service';
import { AutoryzacjaService } from './autoryzacja.service';
import { KoszykServiceService } from './koszyk-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private autoryzacjaService: AutoryzacjaService) {

  }

  czyZalogowany(): boolean {
    return this.autoryzacjaService.pobierzZalogowanegoUzytkownika() != null;
  }

  ngOnInit() {
    
  }

  powrot() {
    this.router.navigateByUrl('');
  }

  wyloguj() {
    this.autoryzacjaService.wyloguj();
    this.router.navigateByUrl('logowanie');
  }

  /*stronnicowanie: Stronnicowanie = {
    strona: 1,
    ilosc: 3
  }
  title = 'lab2';
  Lista_artykulow:Artykul[]=[];
  Lista_artykulow_w_Koszyku:Artykul[]=[];

  constructor(private artykuly_service: ArtykulyServiceService, private koszyk_service: KoszykServiceService) { }

  ngOnInit() {
    //this.odswierz();
    this.artykuly_service.pobierzArtykuly(this.stronnicowanie).subscribe(bbb=>this.Lista_artykulow=bbb);
    this.koszyk_service.pobierzKoszyk().subscribe(ccc=>this.Lista_artykulow_w_Koszyku=ccc);
  } 

  onDodajClick(numer_id :number) {
    this.koszyk_service.dodajDoKoszyka(numer_id).subscribe(res=>console.log(res));
    /*this.Lista_artykulow.forEach(artykul=>{if (artykul.id==numer_id) {
      this.koszyk_service.dodajDoKoszyka(artykul);
    }})*/
  //}

  //odswierz() {
    //this.artykuly_service.pobierzArtykuly(this.stronnicowanie).subscribe(bbb=>this.Lista_artykulow=bbb);
 // }

}
