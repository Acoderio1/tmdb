import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from '../interface/cast';
import { Movie } from '../interface/movie';
import { all } from '../services/all.service';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {
  errorMessage: any;
  constructor(private movieinfoservice: all, private router: Router, private route: ActivatedRoute){}
  movieinfo: Movie | undefined;
  math = Math;
  moviecast: Cast[] =[];
  moviereco: Movie[] = [];

  key: Cast[] = []

  ngOnInit(): void{
    const id = String(this.route.snapshot.paramMap.get('id'))
    console.log(id);
    this.movieinfoservice.getMovieinfo(id).subscribe((res: any)=>{
      this.movieinfo = res;
    })
    this.movieinfoservice.getcast(id).subscribe((res: any)=>{
      this.moviecast = res.cast;
    })
    this.movieinfoservice.getreco(id).subscribe((res: any)=>{
      this.moviereco = res.results;
    })
    this.movieinfoservice.getkeyw(id).subscribe((res: any)=>{
      this.key = res.keywords;
    })
  }

  name(id: number) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/movieinfo',id]);
  });
  }

}
