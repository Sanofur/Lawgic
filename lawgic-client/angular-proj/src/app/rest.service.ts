import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map,catchError,tap } from 'rxjs/operators';

  const httpOptions = {
  	headers:new HttpHeaders({
  		'Content-Type': 'application/json'
  	})
  }; 

@Injectable({
  providedIn: 'root'
})



export class RestService {

  constructor(private http: HttpClient) { }



  private extractData(res: Response){
  	let body =res;
  	return body || { };
  }

  addProduct (product):Observable<any>{
  	console.log(product);
  	return this.http.post<any>('http://localhost:3000/login/login',
  		JSON.stringify(product),httpOptions)
  	.pipe(tap((product)=> console.log('added product')),
  	catchError(this.handleError<any>('addProduct'))
  	);

  }


  private handleError<T> (operation ='operation',result?: T){
  	return (error: any): Observable<T> =>
  	{

  		console.error(error);
  		console.log('${operation} failed:${error.message}');
  		return of(result as T);
  	};
  }


}
