import { PresentacionService } from './../../services/rombus/presentacion.service';
import { StateStorage } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-tipo-presentacion',
  templateUrl: './wizard-tipo-presentacion.component.html',
  styles: [
  ]
})
export class WizardTipoPresentacionComponent implements OnInit {

  public presentaciones: any[];
  public presentacion: any = { titulo: null };

  public wizardValido: boolean = true;

  constructor(
    private _presentacion: PresentacionService,
    private _router: Router,
    private _storage: StateStorage
    ) {
    let step = { wizard: '4/4', titulo: 'Tipo de presentación'};
    this._storage.actualizarPasoActual(step);
  }

  ngOnInit(): void {
    this._presentacion.obtenerPresentaciones().subscribe((res) => {
      this.presentaciones = res;
    });
  }

  seleccionarPresentacion(presentacion: any): void {
    this.presentacion = presentacion;
  }

  public guardarWizard(): void {
    const wizard: any = {
      presentacion: this.presentacion
    };

    // Validar que campos del objeto no estén vacíos
    for (let a in wizard) {
      const validacion = wizard[a] != '' && wizard[a] != null;
      validacion ? this.wizardValido = true : this.wizardValido = false;
    }

    this._storage.state.wizard3 = wizard;
    this.wizardValido ? this._router.navigate(['/resumen']) : null;

  }

}
