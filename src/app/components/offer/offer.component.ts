import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { Offer } from './Offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent   {

  ofertas:any[]=[];
  offerValue:Offer[] = [];
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
     this.offerValue = [{
       id: '01',
       name: 'holap puto'
     }]

     console.log(event);
   }










}
