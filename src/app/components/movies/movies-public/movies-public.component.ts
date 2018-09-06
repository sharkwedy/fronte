import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movies.service';
import { Movie } from '../../../models/movie';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-movies-public',
  templateUrl: './movies-public.component.html',
  styleUrls: ['./movies-public.component.css']
})
export class MoviesPublicComponent implements OnInit {

  constructor(public movieService: MovieService,
    private _router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies()
    .subscribe(
      res => {
        this.movieService.movies = res as Movie[];
        console.log(res);
      },
      err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this._router.navigate(['/login']);
        }
      }
    });
  }

}
