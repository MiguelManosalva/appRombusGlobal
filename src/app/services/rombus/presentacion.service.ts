import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PresentacionService {

  constructor(private http: HttpClient) {}

  obtenerPresentaciones() {
    const url = `../../assets/data/presentaciones.json`;
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
