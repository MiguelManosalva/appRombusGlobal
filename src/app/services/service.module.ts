import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EspecialidadService,
  PresentacionService,
  StateStorage
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    EspecialidadService,
    PresentacionService,
    StateStorage
  ]
})
export class ServiceModule { }
