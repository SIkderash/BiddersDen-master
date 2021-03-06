import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = new User()

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.user = this.userService.getUser();
  }


}
