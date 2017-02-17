import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  encapsulation: ViewEncapsulation.null,
  changeDetection: ChangeDetectionStrategy.null
})
export class VehicleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
