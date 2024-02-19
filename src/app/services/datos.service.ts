import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Datos, Usuario } from './usuario.interface';
import { Observable, delay, map } from 'rxjs';





@Injectable({
  providedIn: 'root',
})
export class DatosService {

  
  private http = inject( HttpClient );


  public getUsuario(): Observable<Datos[]> {

    return this.http.get<Usuario>('https://reqres.in/api/users')
    .pipe(
      // delay( 1500 ),
      map( resp => resp.data ),
    );
  }
}
