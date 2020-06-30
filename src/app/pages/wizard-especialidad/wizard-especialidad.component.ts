import { EspecialidadService } from './../../services/especialidad.service';
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
  private categoria: any;
  private subCategoria: any;
  private habilidades: any[];

  public wizardValido: boolean = true;

  constructor(
    private _especialidad: EspecialidadService,
    private _router: Router
  ) {}

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

    this.wizardValido ? this._router.navigate(['/datos-adicionales']) : null;

  }
}
