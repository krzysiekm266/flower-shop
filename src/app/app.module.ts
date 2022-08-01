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
import { LogoComponent } from './components/logo/logo.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { ConfigService } from './services/config.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationButtonComponent,
    MenuComponent,
    ProductListComponent,
    ShoppingCartComponent,
    ProductComponent,
    LogoComponent,
    SocialMediaComponent,
    FooterComponent,
    MenuMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
