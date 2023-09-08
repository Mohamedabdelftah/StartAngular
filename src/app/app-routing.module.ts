import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  
  { path : "home" , component : HomeComponent , pathMatch: 'full' , title:"Home" } , 
  { path : "about" , component : AboutComponent , pathMatch: 'full' , title:"About Us"} , 
  { path : "portfolio" , component : PortfolioComponent , pathMatch: 'full' , title:"Portfolio"} ,
  { path : "contactus" , component : ContactusComponent , pathMatch: 'full' , title: "Contact Us"} ,
  { path: '', redirectTo: 'home', pathMatch: 'full'} , 
  { path : "**" , component : NotfoundComponent} 


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
