import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateStorage } from 'src/app/services/state.service';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styles: [],
})
export class FormularioContactoComponent implements OnInit {
  
  @Input() public formulario: FormGroup;

  constructor(){}

  ngOnInit(): void {}

}
