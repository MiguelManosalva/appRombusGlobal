import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styles: [
  ]
})
export class HabilidadesComponent implements OnInit {

  @Input() public color: string = '';
  public habilidades: any[] = ['Diseño de Interfaz de Usuario'];
  public habilidad: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public agregarHabilidad(): void{
    if(this.habilidad == '' || this.habilidad.trim() == '') return;
    this.habilidades.push(this.habilidad);
    this.habilidad = '';
  }

  public borrarHabilidad(habilidad: String):void{
    this.habilidades = this.habilidades.filter( e => e != habilidad)
  }

}
