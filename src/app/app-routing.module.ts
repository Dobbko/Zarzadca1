import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtykulComponent } from './artykul/artykul.component';
import { AutoryzacjaGuard } from './autoryzacja.guard';
import { FormularzComponent } from './formularz/formularz.component';
import { KoszykComponentComponent } from './koszyk-component/koszyk-component.component';
import { KoszykListaComponent } from './koszyk-lista/koszyk-lista.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [ 
  { path: "", component: MenuComponent, canActivate: [AutoryzacjaGuard] },
  { path: "logowanie", component: LogowanieComponent },
  { path: "artykuly", canActivate: [AutoryzacjaGuard] , children: [
    { path: "", component: ArtykulComponent },
    { path: "nowy", component: FormularzComponent, canActivate: [AutoryzacjaGuard] , data: { dozwolonaRola: "Admin" } },
    { path: ":id", component: FormularzComponent, canActivate: [AutoryzacjaGuard] , data: { dozwolonaRola: "Admin" } }
  ] },
  { path: "koszyk", component: KoszykListaComponent, canActivate: [AutoryzacjaGuard] }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
