import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, subscribeOn, tap, throwError } from 'rxjs';
import { Movie } from '../interface/movie';
import { all } from '../services/all.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  errorMessage: any;
  constructor(private hompageService: all, private router: Router){}
  popmovies: Movie[] = []
  trendmovies: Movie[] =[]
  nplaymovies: Movie[] =[]
  ngOnInit(): void{
    this.hompageService.getpopMovies().subscribe((res: any)=>{
      this.popmovies = res.results;
    })
    this.hompageService.gettrendMovies().subscribe((res: any)=>{
      this.trendmovies = res.results;
    })
    this.hompageService.getnplayMovies().subscribe((res: any)=>{
      this.nplaymovies = res.results;
    })
  }

  name(id: number) {
    this.router.navigate(['/movieinfo/',id]);
  }

  search(){
    let key = (<HTMLInputElement>document.getElementById('searchbar')).value || null;
    this.router.navigate(['/searchpage/',key]);  }
}
