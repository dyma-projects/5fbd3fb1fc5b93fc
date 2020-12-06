import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(public userService : UserService
  ) { }

  ngOnInit() {
    this.userService.users.subscribe( 
      (data : string[]) => {
        this.users = data;
        console.log('load date : ',data)
      }
    )
    //comme pour le moment, on ne fait qu'afficher une liste, 
    //on pourait ne pas utiliser le subscribe
    //et seulement faire : this.users = this.userService.users.value;
    //vu que l'on fonctionne par référence (je crois) ?
  }

}
