import { Component } from '@angular/core';
import { OfertasService } from './services/ofertas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba';

  constructor(private oferta: OfertasService){  }

  

}
