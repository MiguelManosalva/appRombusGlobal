import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PresentacionService {
  
  private api: string = environment.api;

  constructor(private http: HttpClient) {}

  obtenerPresentaciones() {
    const url = `${this.api}presentaciones.json`;
    return this.http.get(url).pipe(
      map(
        (res: any) => res.presentaciones,
        (error) => {
          console.error(error);
          return error;
        }
      ),
      catchError((error) => throwError(error))
    );
  }



}
