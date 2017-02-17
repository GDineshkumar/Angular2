import {Component, OnInit} from "@angular/core";

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
  selector: 'details-name',
  template: '<p>NameComponent</p>'
})
export class NameComponent {
}

@Component({
  selector: 'address-name',
  template: '<p>AddressComponent</p>'
})
export class AddressComponent {
}
