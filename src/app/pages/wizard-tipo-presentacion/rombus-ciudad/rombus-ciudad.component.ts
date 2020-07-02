import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rombus-ciudad',
  templateUrl: './rombus-ciudad.component.html',
  styles: [
  ]
})
export class RombusCiudadComponent implements OnInit {

  @Input() public presentacion: any;
  @Input() public formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
