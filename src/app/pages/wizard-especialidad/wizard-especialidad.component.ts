import { StateStorage } from './../../services/state.service';
import { EspecialidadService } from '../../services/rombus/especialidad.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { faCode, faEye, faThumbsUp, faBinoculars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wizard-especialidad',
  templateUrl: './wizard-especialidad.component.html',
  styles: [],
})
export class WizardEspecialidadComponent implements OnInit {

  public especialidades: any[];
  public especialidad: any = { titulo: null };
  public categoria: any;
  public subCategoria: any;
  public habilidades: any[];

  public wizardValido: boolean = true;

  constructor(
    private _especialidad: EspecialidadService,
    private _router: Router,
    private _storage: StateStorage
    ) {
    let step = { wizard: '2/4', titulo: 'Especialidad'};
    this._storage.actualizarPasoActual(step);
  }

  ngOnInit(): void {
    this._especialidad.obtenerEspecialidades().subscribe((res) => {
      this.especialidades = res;
    });
  }

  seleccionarEspecialidad(especialidad: any): void {
    this.especialidad = especialidad;
  }

  public guardarWizard(): void {
    const wizard: any = {
      especialidad: this.especialidad,
      categoria: this.categoria,
      subCategoria: this.subCategoria,
      habilidades: this.habilidades,
    };

    // Validar que campos del objeto no estén vacíos
    for (let a in wizard) {
      const validacion = wizard[a] != '' && wizard[a] != null;
      validacion ? this.wizardValido = true : this.wizardValido = false;
    }

    this._storage.state.wizard2 = wizard;
    this.wizardValido ? this._router.navigate(['/datos-adicionales']) : null;

  }
}
