import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styles: [
  ]
})
export class HabilidadesComponent implements OnInit {

  @Input() public color: string = '';
  @Output() private obtenerHabilidades: EventEmitter<any> = new EventEmitter<any>();

  @Input() public habilidades: any[] = ['Diseño de Interfaz de Usuario'];
  public habilidad: string = '';

  constructor() { }

  ngOnInit(): void {
    // Enviar habilidades por default
    this.obtenerHabilidades.emit(this.habilidades);
  }

  public agregarHabilidad(): void{
    if(this.habilidad == '' || this.habilidad.trim() == '') return;
    this.habilidades.push(this.habilidad);
    this.obtenerHabilidades.emit(this.habilidades);
    this.habilidad = '';
  }

  public borrarHabilidad(habilidad: String):void{
    this.habilidades = this.habilidades.filter( e => e != habilidad)
  }

}
