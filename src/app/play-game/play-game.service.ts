import { Injectable } from '@angular/core';

const ROCK: string = 'rock';
const PAPER: string = 'paper';
const SCISSORS: string = 'scissors';
const WEAPONS: string[] = [ROCK, PAPER, SCISSORS];

const DRAW: string = 'draw';
const WIN: string = 'win';
const LOSS: string = 'loss';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {

  constructor() { }

  getGameWeapons() {
    return WEAPONS;
  }

  /**
   * Create map with game rules
   */
  getGameRules() {
    let gameRules = {};

    for (let i in WEAPONS) {
      let playerWeapon = WEAPONS[i];

      gameRules[playerWeapon] = {};

      for (let j in WEAPONS) {
        let computerWeapon = WEAPONS[j];

        if (playerWeapon === computerWeapon) {

          gameRules[playerWeapon][computerWeapon] = DRAW;

        } else if ((playerWeapon === ROCK && computerWeapon === PAPER) ||
            (playerWeapon === PAPER && computerWeapon === SCISSORS) ||
            (playerWeapon === SCISSORS && computerWeapon === ROCK)) {

          gameRules[playerWeapon][computerWeapon] = LOSS;

        } else {

          gameRules[playerWeapon][computerWeapon] = WIN;

        }
      }
    }

    return gameRules;
  }
}
