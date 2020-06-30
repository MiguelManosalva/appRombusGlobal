import { EspecialidadService } from './../../../services/especialidad.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-especialidad',
  templateUrl: './categoria-especialidad.component.html',
  styles: [
  ]
})
export class CategoriaEspecialidadComponent implements OnInit {

  @Input() especialidad: any;

  public cargando: boolean = true;
  public categorias: any[];
  public subCategorias: any[];
  public categoria: string = '';

  constructor( private _especialidad: EspecialidadService) {
  }

  ngOnInit(): void {
    console.log("this.especialidad.id: ", this.especialidad);

    this.obtenerCategorias(this.especialidad.id);
  }

  public obtenerCategorias(idEspecialidad){
    this.cargando = true;
    this._especialidad.obtenerCategorias(idEspecialidad).subscribe( res => {
      this.categorias = res;
      this.cargando = false;
    })
  }

  public obtenerSubCategorias(idCategoria){
    this.cargando = true;
    this._especialidad.obtenerSubCategorias(idCategoria).subscribe( res => {
      this.subCategorias = res;
      this.cargando = false;
    })
  }

  public borrarHabilidad():void{
    console.log("hola mundo");

  }


}
