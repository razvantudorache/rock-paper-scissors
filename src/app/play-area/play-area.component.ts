import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayAreaService } from "./play-area.service";
import { Router } from "@angular/router";

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
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayAreaComponent implements OnInit {
  public playerName: string = sessionStorage.getItem("playerName");

  // determine if the player name is already stored on session
  public hasPlayerAlready: boolean = !!sessionStorage.getItem("playerName");

  private gameRules: {} = {};

  public computerWeapon: string = "";

  constructor(private playAreaService: PlayAreaService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.iniEvents();

    this.initGameRules();
  }

  /**
   * Initialize all events used in play area page
   */
  private iniEvents() {
    // on log out the player name is removed from session
    this.playAreaService.removePlayerEvent.subscribe(() => {
      // remove player name from session
      sessionStorage.removeItem("playerName");

      // reset player name
      this.playerName = "";

      // reset variable that controls what view should be displayed on play area page
      this.hasPlayerAlready = false;

      this.route.navigate(['/play-area', "new"]);
    });
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
   * Store player name on session
   */
  startGame() {
    if (this.playerName.trim().length) {
      sessionStorage.setItem("playerName", this.playerName);

      this.hasPlayerAlready = true;

      this.route.navigate(['/play-area', "start"]);
    } else {
      //TODO validation error
    }
  }

  /**
   * Action performed on rock/paper/scissors selection
   * @param playerWeapon
   * @param $event
   */
  selectWeapon(playerWeapon: string, $event) {
    this.computerWeapon = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];

    PlayAreaComponent.setClassOnSelectedItem($event.currentTarget);

    console.log(this.gameRules[playerWeapon][this.computerWeapon]);
  }

  /**
   * Set "selected" class on clicked item
   * @param target
   */
  private static setClassOnSelectedItem(target) {
    let selectedItemClasses = target.className;

    // prevent adding multiple 'selected' class on the same element
    if (selectedItemClasses.indexOf("selected") === -1) {
      selectedItemClasses += " selected";
    }

    target.className = selectedItemClasses;
  }

  public resetGame() {
    this.computerWeapon = "";

    //remove selected classes from player area
  }
}
