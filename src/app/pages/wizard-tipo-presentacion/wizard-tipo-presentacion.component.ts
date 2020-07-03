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

  private wizard4: any;
  public presentaciones: any[];
  public presentacion: any = { titulo: null };
  public formularioContacto: FormGroup;
  private datosContacto: any;
  public presupuesto: any = 0;

  public wizardValido: boolean = true;

  constructor(
    private _presentacion: PresentacionService,
    private _router: Router,
    private _storage: StateStorage,
    public fb: FormBuilder
    ) {
    this.wizard4 = this._storage.state.wizard4;
    this._storage.state.resumen = false;
    let step = { wizard: '4/4', titulo: 'Tipo de presentación'};
    this._storage.actualizarPasoActual(step);

    this.presentacion = this.wizard4.presentacion;
    this.presupuesto = this.wizard4.presupuesto;
    this.datosContacto = this.wizard4.datosContacto;
    this.inicializarFormulario(this.datosContacto); 

  }

  ngOnInit(): void {
    this._presentacion.obtenerPresentaciones().subscribe((res) => {
      this.presentaciones = res;
    });
  }

  private inicializarFormulario(data):void {
    this.formularioContacto = this.fb.group({
      nombre: [{ value: data.nombre, disabled: false }, [Validators.required]],
      apellido: [{ value: data.apellido, disabled: false }, [Validators.required]],
      correo: [
        { value: data.correo, disabled: false },
        [Validators.required, Validators.email],
      ],
      telefono: [{ value: data.telefono, disabled: false }, [Validators.required]],
      ciudad: [{ value: data.ciudad, disabled: false }, [Validators.required]],
      pais: [{ value: '', pais: false }, [Validators.required]],
    });
  }

  public seleccionarPresentacion(presentacion: any): void {
    this.presentacion = presentacion;
    console.log("presentacion:", presentacion);
    
  }

  public guardarWizard(): void {
    const wizard: any = {
      presentacion: this.presentacion,
      presupuesto: this.presupuesto,
      datosContacto: this.datosContacto
    };

    if(this.presentacion.id > 2) this.guardarForm();

    console.log("wizard: ", wizard);
    

    // Validar que campos del objeto no estén vacíos
    // for (let a in wizard) {
    //   const validacion = wizard[a] != '' && wizard[a] != null;
    //   validacion ? this.wizardValido = true : this.wizardValido = false;
    // }

    this._storage.state.wizard4 = wizard;
    localStorage.setItem('appRombus', JSON.stringify(this._storage.state));
    this.wizardValido ? this._router.navigate(['/resumen']) : null;

  }

  
  public guardarForm(): void {
    
    this.dataContacto = {
      nombre: this.formularioContacto.get('nombre').value,
      apellido: this.formularioContacto.get('apellido').value,
      correo: this.formularioContacto.get('correo').value,
      telefono: this.formularioContacto.get('telefono').value,
      ciudad: this.formularioContacto.get('ciudad').value,
      pais: this.formularioContacto.get('pais').value
    };

    console.log("formularioContacto: ", this.dataContacto);
    
    
    if(this.formularioContacto.invalid){
      this.formularioContacto.markAllAsTouched();
    } else {
      //this._storage.state.wizard1 = wizard;

    }
      
  }

}
