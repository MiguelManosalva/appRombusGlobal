import { EspecialidadService } from './../../../services/especialidad.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categoria-especialidad',
  templateUrl: './categoria-especialidad.component.html',
  styles: [],
})
export class CategoriaEspecialidadComponent implements OnInit {
  
  @Input() public especialidad: any;
  @Output() private obtenerCategoria: EventEmitter<any> = new EventEmitter<any>();
  @Output() private obtenerSubCategoria: EventEmitter<any> = new EventEmitter<any>();

  public cargando: boolean = true;
  public categorias: any[];
  public subCategorias: any[];
  public categoria: string = '';
  public subCategoria: string = '';
  public habilidades: any[] = [];

  constructor(private _especialidad: EspecialidadService) {}

  ngOnInit(): void {
    this.obtenerCategorias(this.especialidad.id);
  }

  ngOnChanges(): void {
    if (this.especialidad.id) {
      this.obtenerCategorias(this.especialidad.id);
    }
  }

  private obtenerCategorias(idEspecialidad: any): void {
    this.cargando = true;
    this._especialidad.obtenerCategorias(idEspecialidad).subscribe((res) => {
      this.categorias = res;
      this.cargando = false;
    });
  }

  public seleccionarCategoria(categoria: any): void {
    this.categoria = categoria;
    this.obtenerCategoria.emit(categoria);
    this.obtenerSubCategorias(this.especialidad.id);
  }

  public seleccionarSubCategoria(subCategoria: any): void{
    this.subCategoria = subCategoria;    
    this.obtenerSubCategoria.emit(subCategoria);
  }

  private obtenerSubCategorias(idCategoria: any): void {
    this.cargando = true;
    this._especialidad.obtenerSubCategorias(idCategoria).subscribe((res) => {
      this.subCategorias = res;
      this.cargando = false;
    });
  }
}
