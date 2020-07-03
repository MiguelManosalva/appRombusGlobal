import { StateStorage } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-definicion',
  templateUrl: './wizard-definicion.component.html',
  styles: [],
})
export class WizardDefinicionComponent implements OnInit {
  public formulario: FormGroup;
  private wizard1: any;

  constructor(
    public fb: FormBuilder,
    private _router: Router,
    private _storage: StateStorage
  ) {
    this.wizard1 = this._storage.state.wizard1;
    this._storage.state.resumen = false;
    let step = { wizard: '1/1', titulo: 'Definición' };
    this._storage.actualizarPasoActual(step);

    // Iniciar formulario
    this.formulario = this.fb.group({
      titulo: [{ value: this.wizard1.titulo, disabled: false }, [Validators.required]],
      descripcion: [{ value: this.wizard1.descripcion, disabled: false }, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  public guardarForm(): void {
    const wizard: any = {
      titulo: this.formulario.get('titulo').value,
      descripcion: this.formulario.get('descripcion').value,
    };

    this._storage.state.wizard1 = wizard;
    localStorage.setItem('appRombus', JSON.stringify(this._storage.state));

    this.formulario.invalid
      ? this.formulario.markAllAsTouched()
      : this._router.navigate(['/especialidad']);
  }
}
