import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import * as _ from 'lodash';

const ROCK: string = "rock";
const PAPER: string = "paper";
const SCISSORS: string = "scissors";
const WEAPONS: string[] = [ROCK, PAPER, SCISSORS];

const DRAW: string = "draw";
const WIN: string = "win";
const LOSS: string = "loss";

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
  public playerName: string = sessionStorage.getItem("playerName");

  // map with game rules
  private gameRules: {} = {};

  // computer selection
  public computerWeapon: string = "";

  // make constant to be usable in template
  public weapons = WEAPONS;

  private selectedItem;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initGameRules();
  }

  /**
   * Create map with game rules
   */
  private initGameRules() {
    for (let i in WEAPONS) {
      let playerWeapon = WEAPONS[i];

      this.gameRules[playerWeapon] = {};

      for (let j in WEAPONS) {
        let computerWeapon = WEAPONS[j];

        if (playerWeapon === computerWeapon) {

          this.gameRules[playerWeapon][computerWeapon] = DRAW;

        } else if ((playerWeapon === ROCK && computerWeapon === PAPER) ||
          (playerWeapon === PAPER && computerWeapon === SCISSORS) ||
          (playerWeapon === SCISSORS && computerWeapon === ROCK)) {

          this.gameRules[playerWeapon][computerWeapon] = LOSS;

        } else {

          this.gameRules[playerWeapon][computerWeapon] = WIN;

        }
      }
    }
  }

  /**
   * Action performed on rock/paper/scissors selection
   * @param playerWeapon
   * @param $event
   */
  selectWeapon(playerWeapon: string, $event) {
    this.computerWeapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];

    this.selectedItem = $event.currentTarget;

    this.setClassOnSelectedItem();

    this.openResultDialog(this.gameRules[playerWeapon][this.computerWeapon]);
  }

  /**
   * Open dialog with the result of the game between user and computer
   * @param result
   */
  private openResultDialog(result) {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      autoFocus: false,
      panelClass: "resultDialog",
      minHeight: "150px",
      minWidth: "450px",
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
    if (selectedItemClasses.indexOf("selected") === -1) {
      selectedItemClasses += " selected";
    }

    this.selectedItem.className = selectedItemClasses;
  }

  /**
   * Reset user and computer selection when result dialog is closed
   */
  public resetGame() {
    this.computerWeapon = "";

    // remove selected class in order to have all options available again
    this.selectedItem.className = _.replace(this.selectedItem.className, "selected", "");
  }
}
