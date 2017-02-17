import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css'],
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  template: '<p>NameComponent</p>',
  styles: ['']
})
export class NameComponent {
}

@Component({
  template: '<p>AddressComponent</p>',
  styles: ['']
})
export class AddressComponent {
}
