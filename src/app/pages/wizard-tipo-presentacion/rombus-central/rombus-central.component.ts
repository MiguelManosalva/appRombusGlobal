import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rombus-central',
  templateUrl: './rombus-central.component.html',
  styles: [
  ]
})
export class RombusCentralComponent implements OnInit {

  @Input() public presentacion: any;
  @Input() public formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
