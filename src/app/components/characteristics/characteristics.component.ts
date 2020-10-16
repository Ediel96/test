import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent {

  constructor(private oferta: OfertasService) { }

  
  getCaracterisitcasOferta(){
    this.oferta.getCaracteristica()
    // subscribe((data: any) => {
    //   data.map( item => console.log(item[0]))
      
    // });
  }

}
