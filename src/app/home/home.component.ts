import { Component, OnInit } from '@angular/core';
import { Services } from './shopping.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
public fav_icon:boolean = false;
public user_icon:boolean = false;
public cart_icon:boolean = false;
public search_icon:boolean = false;
public office_icon:boolean =false;
public solar_icon:boolean =false;
public bulb_icon:boolean =false;
public battery_icon:boolean =false;



public allProducts:any;
// public user:string = 'Guest' ;
constructor(/* private service:Services */){};

ngOnInit(): void {
    /* this.service.allProducts().subscribe((response)=> {
      if(response){
        this.allProducts = response;
      }
    }) */
}

}
