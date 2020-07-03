import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rango-precio',
  templateUrl: './rango-precio.component.html'
})
export class RangoPrecioComponent implements OnInit {

  public rangoPrecioSugerido: string = "$ 1.000 / $ 2.000";
  @Input() public presupuesto: any = 0; 
  public presupuestoValido: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
