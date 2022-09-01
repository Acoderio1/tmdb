import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { all } from '../services/all.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  constructor(private searchpageservice: all, private route: ActivatedRoute, private router: Router) { }
  movies: Movie[] = []
  ngOnInit(): void {
    const key = String(this.route.snapshot.paramMap.get('key'))
    this.searchpageservice.getSearch(key).subscribe((res: any)=>{
      this.movies = res.results;
    })
  }

  name(id: number) {
    this.router.navigate(['/movieinfo/',id]);
  }

}
