import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styles: [],
})
export class ProjectManagerComponent implements OnInit {
  @Input() public presentacion: any;
  public tipoProyecto: any = { titulo: null };
  public plazo: any = { titulo: null };

  constructor() {}

  ngOnInit(): void {}

  public seleccionarTipoProyecto(tipoProyecto): void {
    this.tipoProyecto = tipoProyecto;
  }

  public seleccionarPlazo(plazo): void {
    this.plazo = plazo;
  }

}
