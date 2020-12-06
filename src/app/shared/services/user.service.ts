import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  public users : BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['luc','jean']);
  
  constructor() { }

  public addUser(name : string) : void {
    this.users.value.push(name);
    this.users.next(this.users.value);


  }
}
