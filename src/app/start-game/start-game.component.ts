import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartGameComponent implements OnInit {
  @ViewChild("playerNameRef") playerNameRef;

  public playerName: string = sessionStorage.getItem("playerName");

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Store player name on session and navigate to the play route
   */
  startGame() {

    if (this.playerNameRef.valid) {
      sessionStorage.setItem("playerName", this.playerName);

      this.router.navigateByUrl('/play');
    }
  }

}
