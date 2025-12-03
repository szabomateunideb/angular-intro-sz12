import {Component, OnInit} from '@angular/core';
import {Movie} from '../models/movie.dto';
import {MovieService} from '../services/movie.service';
import {MatDialog} from '@angular/material/dialog';
import {
  MatCell,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'app-film-crud',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  templateUrl: './film-crud.html',
  styleUrl: './film-crud.css',
})
export class FilmCrud implements OnInit {

  filmek: Movie[] = [];
  displayedColumn: string[] = ['id'
    , 'cim'
    , 'megjelenes'
    , 'hossz'
    ,'korhatár'
  ];

  constructor(private filmService: MovieService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.filmService.getAll().subscribe(data=> this.filmek = data);
  }

}
