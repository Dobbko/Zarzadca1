import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artykul } from 'src/models/artykul';
import { AutoryzacjaService } from './autoryzacja.service';

export interface Stronnicowanie{
  strona: number;
  ilosc: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArtykulyServiceService {

  private artykuly: BehaviorSubject<Artykul[]> = new BehaviorSubject<Artykul[]>([]);

  constructor(private http:HttpClient, private autoryzacja: AutoryzacjaService) {
    /*setTimeout(()=>{
      this.artykuly.next([
        {id:1, nazwa:"Myszka", opis:"Omen 1234", cena:10.00},
        {id:2, nazwa:"Ksiazka", opis:"Pan Tadeusz", cena:15.00},
        {id:3, nazwa:"Podkładka", opis:"HP Omen", cena:5.00},
        {id:4, nazwa:"Lampka na biurko", opis:"KANLUX Lampka Biurkowa LED na Biurko Szkolna HERON", cena:20.50},
        {id:5, nazwa:"Długopis", opis:"Next", cena:0.30},
        {id:6, nazwa:"Głośniki", opis:"Głośniki TRACER Quanto Black 2.0 KTM 43293", cena:35.00},
        {id:7, nazwa:"Zegarek", opis:"GARMIN Venu ", cena:300.00},
        {id:8, nazwa:"Aparat", opis:"LUMIX S DC-S5K ", cena:1500.00},
        {id:9, nazwa:"Marker", opis:"Marker permanentny BIC 2000 okrągły czarny ", cena:1.00},
        {id:10, nazwa:"Zszywacz biurowy", opis:"Zszywacz biurowy do kartek papieru", cena:5.00}
    ])
 }, 3000);*/
  }

  pobierzArtykuly(stronnicowanie: Stronnicowanie): Observable<Artykul[]> {
    return this.http.get<Artykul[]>("https://localhost:44349/api/Artykuly",{
      params:{
        Strona: stronnicowanie.strona.toString(),
        Ilosc: stronnicowanie.ilosc.toString()
      }, headers: this.dodajNaglowek()
    });
    //return this.artykuly.asObservable();
  }

  pobierzArtykul(id: number): Observable<Artykul> {
    return this.http.get<Artykul>("https://localhost:44349/api/Artykuly/" + id, { headers: this.dodajNaglowek() });
  }

  editArtykul(id: number, artykul: Artykul): Observable<Artykul> {
    return this.http.put<Artykul>("https://localhost:44349/api/Artykuly/" + id, artykul, { headers: this.dodajNaglowek() });
  }

  dodajArtykul(artykul: Artykul): Observable<Artykul[]>{
    return this.http.post<Artykul[]>("https://localhost:44349/api/Artykuly", artykul, { headers: this.dodajNaglowek() });
  }

  private dodajNaglowek(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.autoryzacja.pobierzZalogowanegoUzytkownika()?.token);
  }
}
