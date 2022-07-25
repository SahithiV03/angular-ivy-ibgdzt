import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  card;
  err = false;
  constructor(public content:ContentService) { }


  ngOnInit(): void {
  }

  getData(id){
    this.content.getContentOnIdbasis(id).subscribe(res =>{
      console.log(res, 'res');
      if (res.id== -1) {
        this.err = true;
      }
      this.card = res;
    })
  }

}
