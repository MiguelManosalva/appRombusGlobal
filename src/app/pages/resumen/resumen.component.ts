import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateStorage } from 'src/app/services/state.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styles: [
  ]
})
export class ResumenComponent implements OnInit {

  constructor(
    private _router: Router,
    public _storage: StateStorage,
  ) {
    this._storage.state.resumen = true;

    console.log(this._storage.state);
    console.log(this._storage.state.wizard2.especialidad.color);
    
    
   }

  ngOnInit(): void {
  }

  public terminar(): void {
    this._storage.borrar();
    localStorage.removeItem('appRombus');
    this._router.navigate(['/definicion'])
  }

}
