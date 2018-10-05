import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpApiProvider } from '../../providers/http-api/http-api';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ HttpApiProvider ]
})
export class HomePage {
  
  public data: {};
  constructor(public navCtrl: NavController, private httpApi: HttpApiProvider) {
}
ionViewDidLoad(){
  this.getAllCharacter();  
}
getAllCharacter(){
  this.httpApi.getAllCharacter().subscribe(data => {
    //console.log(data);
    this.data = data;
  });
    
}

}
