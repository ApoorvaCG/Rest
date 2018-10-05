import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

 /*
  Generated class for the HttpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API:string ="https://api.github.com/users/apoorva";
@Injectable()
export class HttpApiProvider {
  public charApi = 'https://anapioficeandfire.com/api/characters';
  public bookApi = 'https://anapioficeandfire.com/api/books';
  public houseApi = 'https://anapioficeandfire.com/api/houses';
  //HttpApiProvider.getAllCharacter(): any;
  constructor(public httpClient: HttpClient) {
    console.log('Hello HttpApiProvider Provider');
    this.getAllCharacter();
  }
  /*getAllCharacter() {
    let obs = this.httpClient.get(API);
    obs.subscribe(response => console.log(response)
  );
  }*/
  getAllCharacter(){
    return this.httpClient.get(this.charApi)
    .do(res => console.log(res));
  }
}
