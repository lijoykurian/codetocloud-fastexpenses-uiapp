import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MealsComponent} from './meals.component'
import {MealsRoutingModule} from './meals.routing.module'
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout'
@NgModule({
    

  declarations: [
    MealsComponent
  ],
  imports: [
    CommonModule,  
    MealsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports:[
    
  ]
  
})
export class MealsModule { }
