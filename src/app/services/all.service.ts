import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, throwError, map } from "rxjs";
import { Cast } from "../interface/cast";
import { Movie } from "../interface/movie";
import { DformatPipe } from "./dformat.pipe";

@Injectable({
    providedIn: 'root'
})

export class all {
    private popmovieurl = 'https://api.themoviedb.org/3/movie/popular?api_key=9585037373ac2099a44abad2cac09c54&language=en-US/';

    private trendmovieurl = 'https://api.themoviedb.org/3/trending/all/day?api_key=9585037373ac2099a44abad2cac09c54';

    private nplaymovieurl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9585037373ac2099a44abad2cac09c54&language=en-US&page=1';

    constructor(private http: HttpClient){}

    getpopMovies() : Observable<Movie[]>{
        return this.http.get<Movie[]>(this.popmovieurl).pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    gettrendMovies() : Observable<Movie[]>{
        return this.http.get<Movie[]>(this.trendmovieurl).pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    
    getnplayMovies() : Observable<Movie[]>{
        return this.http.get<Movie[]>(this.nplaymovieurl).pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getMovieinfo(id: string) : Observable<Movie[]>{
        return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/'+id+'?api_key=9585037373ac2099a44abad2cac09c54&language=en-US').pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getcast(id: string) : Observable<Cast[]>{
        return this.http.get<Cast[]>('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=9585037373ac2099a44abad2cac09c54&language=en-US').pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getreco(id: string) : Observable<Movie[]>{
        return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/'+id+'/recommendations?api_key=9585037373ac2099a44abad2cac09c54&language=en-US&page=1').pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getkeyw(id: string) : Observable<Cast[]>{
        return this.http.get<Cast[]>('https://api.themoviedb.org/3/movie/'+id+'/keywords?api_key=9585037373ac2099a44abad2cac09c54').pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getSearch(key: string) : Observable<Movie[]>{
        return this.http.get<Movie[]>('https://api.themoviedb.org/3/search/multi?api_key=9585037373ac2099a44abad2cac09c54&language=en-US&query='+key+'&page=1&include_adult=false').pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getfilter(type: string, value: string, from:any, to:any, words: any) : Observable<Movie[]>{
        console.log(from,to)
        return this.http.get<Movie[]>('https://api.themoviedb.org/3/discover/'+type+'?api_key=9585037373ac2099a44abad2cac09c54&language=en-US&sort_by='+value+'&include_adult=false&include_video=false&page=1&release_date.gte='+from+'&release_date.lte='+to+'&with_keywords='+words+'&with_watch_monetization_types=flatrate').pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getUser(){
        return sessionStorage.getItem('userdata')
    }


    /*getmoviesbyfilter(sorttype: string,) : Observable<Movie[]>{
        return this.http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?api_key=9585037373ac2099a44abad2cac09c54&language=en-US&sort_by='+sorttype+'&include_adult=false&include_video=false&with_watch_monetization_types=flatrate').pipe(
            tap(data => console.log('ALL', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }*/

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }
}