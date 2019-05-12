import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',  loadChildren: '../modules/home/home.module#HomeModule'
   

  },
  {
    path:'meals',  loadChildren: '../modules/meals/meals.module#MealsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
