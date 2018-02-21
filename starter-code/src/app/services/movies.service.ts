import { Injectable } from '@angular/core';
import movieList from '../../sample-movies'

@Injectable()
export class MoviesService {
  movies = movieList

  constructor() { }

  getMovies() {
    return this.movies
  }

  getMovie(id) {
    return this.movies.filter(e => e.id == id )[0]
  }

}
