import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {


  constructor(private http:HttpClient) {

    console.log("servicio funcionanado");

  const url = '../../assets/ofertas.json';
    this.http.get(url)
      .subscribe(res =>{
        console.log(res);
      })

  }

  getQuey() {
    const url = `../../assets/ofertas.json`;
    return this.http.get(url);
  }

  getOferta(){
    return this.getQuey()
      .pipe(map((data:any) => 
          data.map(a => a['versions']) 
      // .subscribe((item:any) => {        
      //   console.log(item)
      //   return item
      ));
    
  }



}
