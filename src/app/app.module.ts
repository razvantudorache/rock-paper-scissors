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
import { PlayAreaComponent } from './play-area/play-area.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HighscoreListComponent,
    PlayAreaComponent,
    TopBarComponent
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
  bootstrap: [AppComponent]
})
export class AppModule {
}
