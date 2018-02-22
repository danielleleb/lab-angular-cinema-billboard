import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service'
import {ActivatedRoute, Router} from '@angular/router'



@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {
  movie;


  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params
    .subscribe((params) => this.movie= params['id'])
  }

  ngOnInit() {
    this.movie= this.moviesService.getMovie(this.movie)
   

   }

  }


