import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { all } from '../services/all.service';
import { DformatPipe } from '../services/dformat.pipe';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css']
})
export class FilterpageComponent implements OnInit,OnDestroy{
  sub: any;
  constructor(private filterservice: all, private route: ActivatedRoute, private router: Router) { }
  movies: Movie[] = []
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.getservice()}
    );
    this.route.queryParams.subscribe(resp => {
      console.log(resp)
      this.getservice(resp['value'] || 'popularity.asc',resp['from']||'', resp['to']||'' , resp['words']||'')

    });
  }

  getservice(value?: string,from?:string, to?:string, words?:string){
    this.sub = this.filterservice.getfilter(this.route.snapshot.params['type'], value || '', from || '', to || '', words || '').subscribe((res: any)=>{
      this.movies = res.results;
    })
  }

  getmovies(){
    let value = (<HTMLSelectElement>document.getElementById('dropdown')).value || '';
    let from = (<HTMLSelectElement>document.getElementById('fromdate')).value || '';
    let to = (<HTMLSelectElement>document.getElementById('todate')).value || '';
    let words = (<HTMLSelectElement>document.getElementById('keywords')).value || '';

    this.router.navigate([], {queryParams: {value: value, from: from, to:to, words :words}})
    
  }

  name(id: number) {
    this.router.navigate(['/movieinfo/',id]);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
