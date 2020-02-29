import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Log out action
   */
  logOut() {
    // remove player name from session
    sessionStorage.removeItem("playerName");

    // navigate to the main route
    this.router.navigateByUrl('/start-game');
  }

}
