import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-movies-filters',
  templateUrl: './movies-filters.component.html',
  styleUrls: ['./movies-filters.component.css']
})
export class MoviesFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('select').formSelect();
  }

}
