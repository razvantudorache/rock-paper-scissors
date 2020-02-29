import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayGameComponent } from "./play-game/play-game.component";
import { HighscoreListComponent } from "./highscore-list/highscore-list.component";
import { StartGameComponent } from "./start-game/start-game.component";
import { AuthGuard } from './guards/auth.guard';
import { StartGameGuard } from "./guards/start-game.guard";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "start-game"
  },
  {
    path: "start-game",
    component: StartGameComponent,
    canActivate: [StartGameGuard]
  },
  {
    path: "play-game",
    component: PlayGameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "highscore-list",
    component: HighscoreListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
