import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component'
import {HomeRoutingModule} from './home.routing.module'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatCardModule} from '@angular/material'
@NgModule({
    

  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,  
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports:[
    
  ]
  
})
export class HomeModule { }
