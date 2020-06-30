import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-definicion',
  templateUrl: './wizard-definicion.component.html',
  styles: [
  ]
})
export class WizardDefinicionComponent implements OnInit {

  public formulario: FormGroup;
  public formValido: boolean = true;

  constructor(
    public fb: FormBuilder,
    private _router: Router
    ) {
    this.formulario = this.fb.group({
      'titulo': [{ value: '', disabled: false }, [Validators.required]],
      'descripcion': [{ value: '', disabled: false }, [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  public guardarForm(): void{
    const wizard: any = {
      titulo: this.formulario.get('titulo').value,
      descripcion: this.formulario.get('descripcion').value
    }
    if(this.formulario.invalid)
      this.formValido = false;
    else {
      this.formValido = true;
      this._router.navigate(['/especialidad'])
    }

  }

}
