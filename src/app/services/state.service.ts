import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const initialState = {
  step: { wizard: '1/1', titulo: "Definición" },
  wizard1: {
    titulo: '',
    descripcion: ''
  },
  wizard2: {
    especialidad: '',
    categoria: '',
    subCategoria: '',
    habilidades: []
  },
  wizard3: {

  },
  wizard4: {

  }
}

@Injectable({
  providedIn: 'root',
})
export class StateStorage {

  public state = initialState;

  constructor() {
      const dataStorage = JSON.parse(localStorage.getItem('appRombus'));
      if(dataStorage){
        this.state = dataStorage
      }
  }

  public obtener(): any{
    return this.state;
  }

  public actualizar(data): void{
    this.state = data;
    localStorage.setItem('appRombus', JSON.stringify(data));
  }

  public borrar(): void{
    this.state = initialState;
  }

  public actualizarPasoActual(paso){
    this.state.step = paso;
  }

}
