import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EspecialidadService,
  StateStorage
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    EspecialidadService,
    StateStorage
  ]
})
export class ServiceModule { }
