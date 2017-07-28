import { Component } from '@angular/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';
import { UserInsertFormComponent } from './user-insert-form/user-insert-form.component';
import { FormGroup, ReactiveFormsModule, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService] 
})
export class AppComponent {

 	users:User[];

	constructor(private usersService: UsersService) {
		usersService.getUsers() 
                    .subscribe(result => { 
                      this.users = result; 
                    }); 
		
	}

	addUser(user){
		this.usersService.addUser(user);
	}

}

