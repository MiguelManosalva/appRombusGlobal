import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const initialState: any = {
  step: { wizard: '1/1', titulo: "Definición" },
  resumen: false,
  wizard1: {
    titulo: '',
    descripcion: '',
    estado: false,
  },
  wizard2: {
    especialidad: {},
    categoria: '',
    subCategoria: '',
    habilidades: [],
    estado: false,
  },
  wizard3: {
    archivo: {
      nombre: '',
      base64: '',
    },
    comentario: '',
    estado: false,
  },
  wizard4: {
    presentacion: { titulo: null },
    nivel: { titulo: null },
    plazo: {titulo: null},
    tipoProyecto: { titulo: null },
    presupuesto: 0,
    datosContacto: {
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      ciudad: '',
      pais: ''
    },
    estado: false,
  }
}

@Injectable({
  providedIn: 'root',
})
export class StateStorage {

  public state = initialState;

  constructor() {
      const dataStorage = JSON.parse(localStorage.getItem('appRombus'));
      console.log("dataStorage: ", dataStorage);
      
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
