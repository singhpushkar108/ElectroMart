import { Component, OnInit } from '@angular/core';
import { Services } from '../home/shopping.service';

@Component({
  selector: 'app-home-prod',
  templateUrl: './home-prod.component.html',
  styleUrls: ['./home-prod.component.css']
})
export class HomeProdComponent implements OnInit {
  public allProducts:any;
  
  constructor (private service:Services){}

  ngOnInit(): void {
    this.service.allProducts().subscribe((response)=> {
      if(response){
        this.allProducts = response;
      }
    });
  }


}
