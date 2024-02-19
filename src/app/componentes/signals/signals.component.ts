import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  template: `


    @if ( cambio() ) {

      <p class="my-4"> {{ nombre() }} </p>

    } @else {

      <p class="my-4"> ********** </p>
      
    }
  
    <br>

    <button (click)="onChange()" class="btn btn-primary">
      Cambiar
    </button>
  `,
})

export class SignalsComponent {

  public nombre = signal<string>('Juan Pablo');
  public cambio = signal<boolean>( true );


  onChange() {
    // this.nombre = '**********'
    // this.nombre.set('**********');
    this.cambio.set( !this.cambio() );
  }

}
