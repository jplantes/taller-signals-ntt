import { Component, inject } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

import { toSignal } from '@angular/core/rxjs-interop'
import { Datos, Usuario } from '../../services/usuario.interface';

@Component({
  selector: 'app-to-signals',
  standalone: true,
  imports: [ AsyncPipe, JsonPipe ],
  template: `
    

    <!-- @for (usuario of usuarios$ | async ; track usuario.id ) {
      <p>{{ usuario.first_name }}</p>
    } @empty {
      <p>hola</p>
    } -->

    @for (usuario of usuarios() ; track usuario.id; 
      let i = $index, first = $first, last = $last, impares = $even, pares = $odd, count = $count ) {
      <p
        class="p-2 rounded"
        [class]="{
          'text-bg-primary': pares,
          'text-bg-secondary': impares,
        }"
      >{{ usuario.first_name }}</p>
    } @empty {
      <p>hola</p>
    }
  
  `,
  styles: ``
})
export class ToSignalsComponent {

  private datosService = inject( DatosService );

  // public usuarios$ = this.datosService.getUsuario();
  public usuarios = toSignal<Datos[]>( this.datosService.getUsuario() );
}
