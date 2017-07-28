import { Component, OnInit, Input } from '@angular/core';
import { ColumnComponent } from '../column/column.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent  {

  @Input() dataset;
  columns: ColumnComponent[] = [];

  constructor() { }

  addColumn(column){
    this.columns.push(column);
  }

}
