import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { PlayGameService } from './play-game.service';

/**
 * GAME RULES
 *
 *           |  Rock  |  Paper | Scissors
 * __________|________|________|_________
 *    Rock   |  Draw  |  Loss  | Win
 * __________|________|________|__________
 *    Paper  |  Win   |  Draw  | loss
 * __________|________|________|__________
 *  Scissors |  Loss  |  Win   | Draw
 * __________|________|________|__________
 *
 */

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayGameComponent implements OnInit {
  public playerName: string = sessionStorage.getItem('playerName');

  // map with game rules
  private gameRules: {} = {};

  // computer selection
  public computerWeapon: string = '';

  // make constant to be usable in template
  public weapons = this.playGameService.getGameWeapons();

  private selectedItem;

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private playGameService: PlayGameService) {
  }

  ngOnInit(): void {
    this.gameRules = this.playGameService.getGameRules();
  }

  /**
   * Action performed on rock/paper/scissors selection
   * @param playerWeapon
   * @param $event
   */
  selectWeapon(playerWeapon: string, $event) {
    this.computerWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];

    this.selectedItem = $event.currentTarget;

    this.setClassOnSelectedItem();

    this.openResultDialog(this.gameRules[playerWeapon][this.computerWeapon]);

    //TODO update user score
  }

  /**
   * Open dialog with the result of the game between user and computer
   * @param result
   */
  private openResultDialog(result) {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      autoFocus: false,
      panelClass: 'resultDialog',
      minHeight: '150px',
      minWidth: '450px',
      data: {
        result: result
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.resetGame();
    });
  }

  /**
   * Set "selected" class on clicked item
   */
  private setClassOnSelectedItem() {
    // trim class name string because the "selected" class is replaced with empty string and added with empty string in front of it
    // this prevents multiple spaces between original classes and the "selected" class
    let selectedItemClasses = this.selectedItem.className.trim();

    // prevent adding multiple 'selected' class on the same element
    if (selectedItemClasses.indexOf('selected') === -1) {
      selectedItemClasses += ' selected';
    }

    this.selectedItem.className = selectedItemClasses;
  }

  /**
   * Reset user and computer selection when result dialog is closed
   */
  public resetGame() {
    this.computerWeapon = '';

    // remove selected class in order to have all options available again
    this.selectedItem.className = _.replace(this.selectedItem.className, 'selected', '');
  }
}
