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
  private datosContacto: any;
  public presentaciones: any[];
  public presentacion: any = { titulo: null };
  public nivel: any = { titulo: null };
  public tipoProyecto: any = { titulo: null };
  public plazo: any = { titulo: null };
  public formularioContacto: FormGroup;
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

    console.log("this.wizard.4: ", this.wizard4);
    
    this.presentacion = this.wizard4.presentacion;
    this.presupuesto = this.wizard4.presupuesto;
    this.datosContacto = this.wizard4.datosContacto;
    this.nivel = this.wizard4.nivel;
    this.plazo = this.wizard4.plazo;
    this.tipoProyecto = this.wizard4.tipoProyecto;
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
      pais: [{ value: data.pais, disabled: false }, [Validators.required]],
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
      datosContacto: this.datosContacto,
      nivel: this.nivel,
      plazo: this.plazo,
      tipoProyecto: this.tipoProyecto
    };

    console.log("wizard: ", wizard);
    

    if(this.presentacion.id > 2) {
      this.guardarForm();
      wizard.datosContacto = this.datosContacto
    };

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
    
    this.datosContacto = {
      nombre: this.formularioContacto.get('nombre').value,
      apellido: this.formularioContacto.get('apellido').value,
      correo: this.formularioContacto.get('correo').value,
      telefono: this.formularioContacto.get('telefono').value,
      ciudad: this.formularioContacto.get('ciudad').value,
      pais: this.formularioContacto.get('pais').value
    };
    
    
    if(this.formularioContacto.invalid){
      this.formularioContacto.markAllAsTouched();
    } else {
      //this._storage.state.wizard1 = wizard;

    }
      
  }

}
