import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movieArray: Array<Object>
  // moviesService: MoviesService
  movie: any;

  constructor(private moviesService: MoviesService) {
    // this.moviesService = moviesService
  }

  
  ngOnInit() {
    this.movieArray = this.moviesService.getMovies()
   

  }

}