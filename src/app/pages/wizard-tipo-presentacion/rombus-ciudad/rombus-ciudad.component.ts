import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rombus-ciudad',
  templateUrl: './rombus-ciudad.component.html',
  styles: [
  ]
})
export class RombusCiudadComponent implements OnInit {

  @Input() public presentacion: any;

  constructor() { }

  ngOnInit(): void {
  }

}
