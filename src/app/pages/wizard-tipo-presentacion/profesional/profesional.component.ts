import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styles: [
  ]
})
export class ProfesionalComponent implements OnInit {

  @Input() public presentacion: any;
  public nivel: any = { titulo: null };
  public tipoProyecto: any = { titulo: null };


  constructor() { }

  ngOnInit(): void {
  }

  public seleccionarNivel(nivel): void {
    this.nivel = nivel;
  }

  public seleccionarTipoProyecto(tipoProyecto):void{
    this.tipoProyecto = tipoProyecto;
  }

}
