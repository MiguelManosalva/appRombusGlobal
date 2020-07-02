import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rombus-central',
  templateUrl: './rombus-central.component.html',
  styles: [
  ]
})
export class RombusCentralComponent implements OnInit {

  @Input() public presentacion: any;

  constructor() { }

  ngOnInit(): void {
  }

}
