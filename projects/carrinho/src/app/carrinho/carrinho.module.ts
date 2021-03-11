import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { Carrinho2Component } from '../carrinho2/carrinho2.component';

@NgModule({
  declarations: [CarrinhoComponent, Carrinho2Component],
  imports: [
    CommonModule,
    CarrinhoRoutingModule
  ],
  bootstrap: [CarrinhoComponent]
})
export class CarrinhoModule { }
