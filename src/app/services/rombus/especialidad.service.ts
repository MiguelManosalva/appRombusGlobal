import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadService {

  private api: string = environment.api;

  constructor(private http: HttpClient) {}

  obtenerEspecialidades() {
    const url = `${this.api}especialidades.json`;
    return this.http.get(url).pipe(
      map(
        (res: any) => res.especialidadades,
        (error) => {
          console.error(error);
          return error;
        }
      ),
      catchError((error) => throwError(error))
    );
  }

  obtenerCategorias(idEspecialidad) {
    const url = `${this.api}categorias.json`;
    return this.http.get(url).pipe(
      map(
        (res: any) => {

          switch (idEspecialidad) {
            case 1:
              res = res.estrategia;
              break;
            case 2:
              res = res.disenio;
              break;
            case 3:
              res = res.estrategia;
              break;
            case 4:
              res = res.estrategia;
              break;

            default:
              break;
          }
          return res;
        },
        (error) => {
          console.error(error);
          return error;
        }
      ),
      catchError((error) => throwError(error))
    );
  }


  obtenerSubCategorias(idCategoria) {
    const url = `${this.api}subCategorias.json`;
    return this.http.get(url).pipe(
      map(
        (res: any) => {

          switch (idCategoria) {
            case 1:
              res = res.estrategia;
              break;
            case 2:
              res = res.estrategia;
              break;
            case 3:
              res = res.estrategia;
              break;
            case 4:
              res = res.estrategia;
              break;

            default:
              break;
          }
          return res;
        },
        (error) => {
          console.error(error);
          return error;
        }
      ),
      catchError((error) => throwError(error))
    );
  }


}
