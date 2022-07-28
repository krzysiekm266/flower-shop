import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  // {path:'',redirectTo: '/',pathMatch:'full'}
  { path:'products/:category' ,component:ProductListComponent ,pathMatch:'full'},
  { path:'',component:NavigationComponent },
  { path:'**',component:NavigationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
