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
    this._router.navigate(['/especialidad'])
    if(this.formulario.invalid){
      console.log("INVALID");
    }

    console.log("wizard: ", wizard);
  }

}
