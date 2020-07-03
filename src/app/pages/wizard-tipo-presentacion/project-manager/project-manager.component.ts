import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styles: [],
})
export class ProjectManagerComponent implements OnInit {
  @Input() public presentacion: any;
  @Input() public tipoProyecto: any = { titulo: null };
  @Input() public plazo: any = { titulo: null };
  @Output() private obtenerTipoProyecto: EventEmitter<any> = new EventEmitter<any>();
  @Output() private obtenerPlazo: EventEmitter<any> = new EventEmitter<any>();


  constructor() {}

  ngOnInit(): void {}

  public seleccionarTipoProyecto(tipoProyecto): void {
    this.tipoProyecto = tipoProyecto;
    this.obtenerTipoProyecto.emit(tipoProyecto)
  }

  public seleccionarPlazo(plazo): void {
    this.plazo = plazo;
    this.obtenerPlazo.emit(plazo);
  }

}
