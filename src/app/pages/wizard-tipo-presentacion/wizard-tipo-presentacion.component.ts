import { PresentacionService } from './../../services/rombus/presentacion.service';
import { StateStorage } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wizard-tipo-presentacion',
  templateUrl: './wizard-tipo-presentacion.component.html',
  styles: [
  ]
})
export class WizardTipoPresentacionComponent implements OnInit {

  public presentaciones: any[];
  public presentacion: any = { titulo: null };
  public formularioContacto: FormGroup;

  public wizardValido: boolean = true;

  constructor(
    private _presentacion: PresentacionService,
    private _router: Router,
    private _storage: StateStorage,
    public fb: FormBuilder
    ) {

    let step = { wizard: '4/4', titulo: 'Tipo de presentación'};
    this._storage.actualizarPasoActual(step);

    this.inicializarFormulario();

  }

  ngOnInit(): void {
    this._presentacion.obtenerPresentaciones().subscribe((res) => {
      this.presentaciones = res;
    });
  }

  private inicializarFormulario():void {
    this.formularioContacto = this.fb.group({
      nombre: [{ value: '', disabled: false }, [Validators.required]],
      apellido: [{ value: '', disabled: false }, [Validators.required]],
      correo: [
        { value: '', disabled: false },
        [Validators.required, Validators.email],
      ],
      telefono: [{ value: '', disabled: false }, [Validators.required]],
      ciudad: [{ value: '', disabled: false }, [Validators.required]],
      pais: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  public seleccionarPresentacion(presentacion: any): void {
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

  
  public guardarForm(): void {
    
    const formulario: any = {
      nombre: this.formularioContacto.get('nombre').value,
      apellido: this.formularioContacto.get('apellido').value,
      correo: this.formularioContacto.get('correo').value,
      telefono: this.formularioContacto.get('telefono').value,
      ciudad: this.formularioContacto.get('ciudad').value,
      pais: this.formularioContacto.get('pais').value
    };

    console.log("formularioContacto: ", formulario);
    
    
    if(this.formularioContacto.invalid){
      this.formularioContacto.markAllAsTouched();
    } else {
      //this._storage.state.wizard1 = wizard;

    }
      
  }

}
