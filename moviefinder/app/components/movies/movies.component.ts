import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html',
})
export class MoviesComponent  { 
  name = 'Angular'; 
  popularList: Array<Object>;
  theatersList: Array<Object>;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

    this._movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
  }
}
