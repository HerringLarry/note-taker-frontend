import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../../services/username.service';
import { LogoutService } from '../../services/logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( private _router: Router) { }

  ngOnInit() {
  }

  checkIfUsernameExists(): boolean {
    return !!UsernameService.username;
  }

  logout() {
    LogoutService.logout();
    this._router.navigate(['login']);
  }

  goToProfile() {
    this._router.navigate(['profile']);
  }

  goToSettings() {
    this._router.navigate(['registration']);
  }

  addPiece() {
    this._router.navigate(['profile/creation']);
  }

  goToLogin() {
    this._router.navigate(['login']);
  }
}
