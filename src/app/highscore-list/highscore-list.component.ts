import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HighscoreListService } from './highscore-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-highscore-list',
    templateUrl: './highscore-list.component.html',
    styleUrls: ['./highscore-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HighscoreListComponent implements OnInit {
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // the order that columns are displayed
    public displayedColumns: string[] = ['user', 'wins', 'losses', 'draws', 'date'];

    public users;

    constructor(private highscoreListService: HighscoreListService) {
    }

    ngOnInit(): void {
        //TODO select users from DB

        this.highscoreListService.getUsers().subscribe((data) => {
            this.users = new MatTableDataSource(data.results);

            this.users.sort = this.sort;
        });
    }

}
