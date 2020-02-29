import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { HighscoreListComponent } from './highscore-list/highscore-list.component';
import { PlayGameComponent } from './play-game/play-game.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ResultDialogComponent } from './play-game/result-dialog/result-dialog.component';
import { StartGameComponent } from './start-game/start-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HighscoreListComponent,
    PlayGameComponent,
    TopBarComponent,
    ResultDialogComponent,
    StartGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ResultDialogComponent
  ]
})
export class AppModule {
}
