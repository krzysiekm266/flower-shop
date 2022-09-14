import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'products/:category' ,component:ProductListComponent },
  { path: 'shopping-cart', component:ShoppingCartComponent },
  {path: 'about',component: AboutComponent},
  { path: '', redirectTo:'/', pathMatch:'full' },
  { path: '**', component:NavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
