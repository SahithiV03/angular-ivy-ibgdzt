import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  content;
  constructor(private _Activatedroute:ActivatedRoute, public _content:ContentService){
 
    
    const id=this._Activatedroute.snapshot.paramMap.get("id");
    console.log(id, 'd');
    this.getData(id);
  }


  ngOnInit(): void {
  }

  getData(id){
    this._content.getContentOnIdbasis(id).subscribe(res =>{
      console.log(res, 'res');
      this.content = res;
    })
  }
}
