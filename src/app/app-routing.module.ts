import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { HomeProdComponent } from './home-prod/home-prod.component';
const routes: Routes = [

  {
    //if the path is empty
    path: "", redirectTo:'main', pathMatch:'full'
  },

  {
    // to home path
    path: "main", component: HomeComponent,
    children: [
        { 
          //if the path after the main path is empty 
          path: '', redirectTo: 'home', pathMatch: 'full'
        },

        { path: 'home', component:HomeChildComponent },
        { path: 'products', component:HomeProdComponent },
        // { path: 'categories', component:HomeProdComponent },


        { path: '**' , component: HomeChildComponent }
    ]
  },

  {
    path: '**' , component: HomeComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
