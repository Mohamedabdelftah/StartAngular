import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  portfolioItems:imgItem[] = [
    { name: 'Item1', imagePath: '../../assets/images/poert1.png' },
    { name: 'Item2', imagePath: '../../assets/images/port2.png' },
    { name: 'Item3', imagePath: '../../assets/images/port3.png' },
    { name: 'Item4', imagePath: '../../assets/images/poert1.png' },
    { name: 'Item5', imagePath: '../../assets/images/port2.png' },
    { name: 'Item6', imagePath: '../../assets/images/port3.png' },
  ];

  selectedCard: any;
  showImage(e:object):void {
    this.selectedCard = e
  }
  closeImage():void{
    this.selectedCard = null; 
  }
  

}



interface imgItem { 
  name:string , 
  imagePath : string  
}
