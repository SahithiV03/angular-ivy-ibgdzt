import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { Content } from './models/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sahithi_Vasireddy_contentlist';
 

card;
constructor(public content:ContentService) { }

  ngOnInit() {

    this.content.getContentOnIdbasis(1).subscribe(res =>{
      console.log(res, 'res');
      this.card = res;
    })
  }


  getData(id){
    this.content.getContentOnIdbasis(id).subscribe(res =>{
      console.log(res, 'res');
      this.card = res;
    })
  }


}
