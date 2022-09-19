import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Registro } from 'src/models/registro.model';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  arrRegistro = [];

  constructor(private navCtrl: NavController,private iab: InAppBrowser) { }

  abrirRegistro(registro: Registro){
    this.navCtrl.navigateForward('/tabs/tab2');
    switch(registro.type){
      case 'http':
        //Abrir el link en el Navegador web por DEFECTO.
        const browser = this.iab.create(registro.text);
        browser.show();
        break;
      case 'geo':
      this.navCtrl.navigateForward(`/tabs/tab2/map/${registro.text}`);
        break;
    }
  }
  setArrRegistro(registro: Registro){
    this.arrRegistro.push(registro);
  }
  getArrRegistro(){
    return this.arrRegistro;
  }
}
