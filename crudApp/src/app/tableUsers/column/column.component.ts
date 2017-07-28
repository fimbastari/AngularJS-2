import { Component, Input } from '@angular/core';
import {DataTableComponent} from '../data-table/data-table.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent {
	
	@Input() value;
	@Input() header;
  	
	constructor(table: DataTableComponent) {
		table.addColumn(this);
	}
		
}
