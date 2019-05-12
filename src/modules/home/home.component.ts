import { Component } from '@angular/core';
import {OrganizationService} from './services/organization.service'
@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  empInfo:any
  constructor(private orgservice:OrganizationService){};
  ngOnInit(){
    this.orgservice.get().subscribe(val=>this.empInfo=val)
  }
}
