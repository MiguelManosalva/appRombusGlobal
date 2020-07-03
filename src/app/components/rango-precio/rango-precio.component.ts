import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rango-precio',
  templateUrl: './rango-precio.component.html'
})
export class RangoPrecioComponent implements OnInit {

  public rangoPrecioSugerido: string = "$ 1.000 / $ 2.000";
  @Input() public presupuesto: any = 0; 
  @Output() public obtenerPresupuesto: EventEmitter<any> = new EventEmitter<any>();

  public presupuestoValido: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
