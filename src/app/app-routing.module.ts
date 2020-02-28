import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayAreaComponent } from "./play-area/play-area.component";
import { HighscoreListComponent } from "./highscore-list/highscore-list.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "play-area"
  },
  {
    path: "play-area",
    component: PlayAreaComponent
  },
  {
    path: "highscore-list",
    component: HighscoreListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
