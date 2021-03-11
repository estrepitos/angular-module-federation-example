
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'carrinho',
    loadChildren: () => import('carrinho/CarrinhoModule').then(m => m.CarrinhoModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('checkout/CheckoutModule').then(m => m.CheckoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
