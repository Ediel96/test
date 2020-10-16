import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent   {

  ofertas:any[]=[];
  constructor(private oferta: OfertasService) {

    
    this.oferta.getOferta()
      .subscribe((item:any) => {
        
        this.ofertas = item;
        console.log(this.ofertas);
      });

    // this.oferta.getOferta()
    //     .subscribe((item:any) => {
    //     this.ofertas = item;
    //     console.log(this.ofertas);

    //   });

   }

   offerChange(event:any){     

     console.log(event);
   }










}
