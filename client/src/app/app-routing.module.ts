import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { SecretSantaComponent } from './pages/secret-santa/secret-santa.component';


const routes: Routes = [
  {
    path: 'exchangecreation', 
    component: ExchangeCreationComponent
  },
  {
    path: 'event', 
    component: SecretSantaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
