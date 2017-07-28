import { Component,Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormsModule } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user-insert-form',
  templateUrl: './user-insert-form.component.html',
  styleUrls: ['./user-insert-form.component.css']
})
export class UserInsertFormComponent {
	name: string;
	surname: string;
	username: string;
	email: string;
	phone: string;
	role: string;
	passw: string;
	confPassw: string;
	constructor() {};

	inviaInfo($event){
		alert('DAJE ' + this.name +" " + this.surname + " " + this.username + " " + this.email + " " + this.phone + " " + this.role + " " + this.passw);
	};

		
}
