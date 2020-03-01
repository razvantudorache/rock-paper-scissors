import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageInterface } from "./message.interface";

// messages map that will be displayed in dialog based on the game results
const MESSAGES: {} = {
  "win": <MessageInterface>{
    title: "Win",
    text: "Congratulations! This time you defeat the computer!"
  },
  "loss": <MessageInterface>{
    title: "Loss",
    text: "Unfortunately, you lose! Don't be sad, try again!"
  },
  "draw": <MessageInterface>{
    title: "Draw",
    text: "You are as good as the computer!"
  }
};

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResultDialogComponent implements OnInit {
  public message: MessageInterface = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
    this.message = MESSAGES[this.data.result];
  }
}
