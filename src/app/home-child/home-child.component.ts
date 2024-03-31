import { Component,OnInit } from '@angular/core';
import { Services } from './../home/shopping.service';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {

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
