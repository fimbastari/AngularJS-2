import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http'; 
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class UsersService {
	private usersList: User[];
	constructor(private http: Http) { 
	
	}

	getUsers(): Observable<User[]> {
		return this.http
        .get("http://localhost:8080/api/user/")
        .map((responseData) => responseData.json()); 

	}

	addUser(user){
		this.usersList.push(user);
	}
}
