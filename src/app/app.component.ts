import { Component } from '@angular/core';
import { SignalsComponent } from './componentes/signals/signals.component';
import { ToSignalsComponent } from './componentes/to-signals/to-signals.component';
import { UpdateComponent } from './componentes/update/update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SignalsComponent, ToSignalsComponent, UpdateComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
