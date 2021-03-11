import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Carrinho2Component } from '../carrinho2/carrinho2.component';
import { CarrinhoComponent } from './carrinho.component';

const routes: Routes = [
  {
    path: '',
    component: CarrinhoComponent,
    pathMatch: 'full'
  },
  {
    path: '2',
    component: Carrinho2Component,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
