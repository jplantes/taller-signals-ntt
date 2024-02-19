import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { __values } from 'tslib';


interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-update',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ JsonPipe ],
  template: `
    <pre>{{ persona() | json }}</pre>

    <button (click)="onChange( 'Lantes' )" class="my-3 btn btn-primary">
      Cambiar Apellido
    </button>

    <hr>

    <p>{{ perro() }}</p>
    <p>{{ anio() }}</p>

  `,
  styles: ``
})
export class UpdateComponent {


  public persona = signal<Persona>({
    nombre: 'Juan Pablo',
    apellido: 'Perez',
    edad: 40
  });

  public perro = signal<string>('Pluto');

  public anio = signal<string>('Año ');



  onChange( newApellido: string ){

    // this.persona.update( value => {
    //   return {
    //     ...value,
    //     apellido: newApellido,
    //   }
    // });

    this.perro.update( () => 'Dulce' );


    this.anio.update( value => value + '2024' );


    this.persona.update( value => this.verCamio( value, newApellido ) );

  }

  public verCamio( value: any , newApellido: string ) {
    
    switch (newApellido) {
      case 'Gonzales':
        return {
          ...value,
          apellido: newApellido
        }
        
    
      default:
        return {
          ...value
        }
    }
  }

}
