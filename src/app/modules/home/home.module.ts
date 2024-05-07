import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routes';
import { HomeComponent } from './home.component';
import { PeopleTableComponent } from '../../components';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PeopleTableComponent]
})

export class HomeModule { 
  
}
