import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const geo = this.route.snapshot.paramMap.get('geo');
    console.log(geo);
  }

}
