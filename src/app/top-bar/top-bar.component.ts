import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayAreaService } from "../play-area/play-area.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {

  constructor(private playAreaService: PlayAreaService) { }

  ngOnInit(): void {
  }

  /**
   * Log out action
   */
  logOut() {
    this.playAreaService.removePlayerEvent.emit();
  }

}
