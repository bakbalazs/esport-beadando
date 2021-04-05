import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-row-data',
  templateUrl: './row-data.component.html',
  styleUrls: ['./row-data.component.scss']
})
export class RowDataComponent {

  @Input() key: String | undefined;
  @Input() value: any | undefined;

}
