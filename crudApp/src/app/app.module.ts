import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataTableComponent } from './tableUsers/data-table/data-table.component';
import { ColumnComponent } from './tableUsers/column/column.component';
import { UserInsertFormComponent } from './user-insert-form/user-insert-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ColumnComponent,
    UserInsertFormComponent
  ],
  imports: [
	HttpModule,  
    BrowserModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
