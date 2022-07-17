import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductService } from './services/product.service';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationButtonComponent,
    MenuComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
