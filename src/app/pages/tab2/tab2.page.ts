import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  arrRegistros = [];
  constructor(private dataLocal: DataLocalService) {}
  ngOnInit(){
    console.log(this.dataLocal.getArrRegistro());
    this.arrRegistros = this.dataLocal.getArrRegistro();
  }
}
