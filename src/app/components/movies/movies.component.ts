import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { NgForm } from '@angular/forms';
import { Movie } from '../../models/movie';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  constructor(public movieService: MovieService,
              private _router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.movieService.selectedMovie = new Movie();
    }
  }

  updateMovie(form?: NgForm) {
    if (form.value._id) {
      this.movieService.putMovie(form.value)
        .subscribe(res => {
          this.resetForm(form);
          // M.toast({html: 'Atualizado com sucesso'});
          this.getMovies();
      });
    }
  }

  addMovie(form?: NgForm) {
    this.movieService.postMovie(form.value)
    .subscribe(res => {
      this.resetForm(form);
      // M.toast({html: 'Adicionado com sucesso'});
      this.getMovies();
    });
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

  editMovie(movie: Movie) {
    this.movieService.selectedMovie = movie;
  }

  deleteMovie(_id: string, form?: NgForm) {
    if (confirm('Você tem certeza que quer remover este registro?')) {
      this.movieService.deleteMovie(_id)
        .subscribe(res => {
        // M.toast({html: 'Removido com sucesso'});
        this.resetForm(form);
        this.getMovies();
      });
    }
  }

}
