import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesDBService } from 'src/app/services/movies-db.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 title = "TI360 MOVIES"
 p: number = 1;
 movies: any [] = [];

  constructor(private movieService: MoviesDBService) { }

  ngOnInit(): void {
    this.getMovies()
  }


  getMovies() {
    this.movieService.getMovie()
    .subscribe(
      listMovie => {
        console.log(listMovie);
        this.movies = listMovie.results
      }
    )
  }


}
