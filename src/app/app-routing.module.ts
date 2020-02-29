import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayAreaComponent } from "./play-area/play-area.component";
import { HighscoreListComponent } from "./highscore-list/highscore-list.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "play-area/new"
  },
  {
    path: "play-area/:status",
    component: PlayAreaComponent
    //TODO this state must verify the value from store in order to redirect user to the right path with the right status. router guard?
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
