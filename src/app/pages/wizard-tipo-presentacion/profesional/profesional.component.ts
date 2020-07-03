import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styles: [
  ]
})
export class ProfesionalComponent implements OnInit {

  @Input() public presentacion: any;
  @Input() public nivel: any;
  @Input() public tipoProyecto: any;
  @Output() private obtenerNivel: EventEmitter<any> = new EventEmitter<any>();
  @Output() private obtenerTipoProyecto: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  public seleccionarNivel(nivel): void {    
    this.nivel = nivel;
    this.obtenerNivel.emit(nivel);
  }

  public seleccionarTipoProyecto(tipoProyecto):void{
    this.tipoProyecto = tipoProyecto;
    this.obtenerTipoProyecto.emit(tipoProyecto)
  }

}
