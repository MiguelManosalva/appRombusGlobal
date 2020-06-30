import { EspecialidadService } from './../../services/especialidad.service';
import { Component, OnInit } from '@angular/core';
// import { faCode, faEye, faThumbsUp, faBinoculars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wizard-especialidad',
  templateUrl: './wizard-especialidad.component.html',
  styles: [
  ]
})
export class WizardEspecialidadComponent implements OnInit {

  public especialidades: any[];
  public especialidad: any = { titulo: null };

  constructor(private _especialidad: EspecialidadService) {
  }

  ngOnInit(): void {
    this._especialidad.obtenerEspecialidades().subscribe( res => {
      this.especialidades = res;
    })
  }

}
