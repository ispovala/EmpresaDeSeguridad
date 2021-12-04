import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
