import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artykul } from 'src/models/artykul';
import { ArtykulyServiceService, Stronnicowanie } from '../artykuly-service.service';
import { KoszykServiceService } from '../koszyk-service.service';

@Component({
  selector: 'app-artykul',
  templateUrl: './artykul.component.html',
  styleUrls: ['./artykul.component.css']
})
export class ArtykulComponent implements OnInit {

  @Input() artykul:Artykul;
  @Output() dodajClick:EventEmitter<number>=new EventEmitter<number>();

  stronnicowanie: Stronnicowanie = {
    strona: 1,
    ilosc: 3
  }
  //title = 'lab2';
  Lista_artykulow:Artykul[]=[];
  Lista_artykulow_w_Koszyku:Artykul[]=[];

  constructor(private artykuly_service: ArtykulyServiceService, private koszyk_service: KoszykServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.artykuly_service.pobierzArtykul(id).subscribe(a => this.artykul = a);
    }
    //this.odswierz();
    this.artykuly_service.pobierzArtykuly(this.stronnicowanie).subscribe(bbb=>this.Lista_artykulow=bbb);
    this.koszyk_service.pobierzKoszyk().subscribe(ccc=>this.Lista_artykulow_w_Koszyku=ccc);
  } 

  onDodajClick(numer_id :number) {
    this.koszyk_service.dodajDoKoszyka(numer_id).subscribe(res=>console.log(res));
    /*this.Lista_artykulow.forEach(artykul=>{if (artykul.id==numer_id) {
      this.koszyk_service.dodajDoKoszyka(artykul);
    }})*/
  }

  odswierz() {
    this.artykuly_service.pobierzArtykuly(this.stronnicowanie).subscribe(bbb=>this.Lista_artykulow=bbb);
  }

  przejdzDoEdycji() {
    this.router.navigateByUrl('artykuly/' + this.artykul.id);
  }

  //artykul:Artykul;
  //@Output() dodajClick:EventEmitter<number>=new EventEmitter<number>();
  //@Input() artykul:Artykul;
  //@Output() dodajClick:EventEmitter<number>=new EventEmitter<number>();

  //constructor() { }

  /*ngOnInit(): void {
  }*/
  /*
  onClick(arty: Artykul) {
    this.dodajClick.emit(arty.id);
  }*/

}
