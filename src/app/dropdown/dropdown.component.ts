import {Component} from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title fav food selector
 */
@Component({
  selector: 'dropdown-component',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['dropdown.component.scss'],
})
export class DropdownComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}