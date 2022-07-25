import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
 @Input() content: Content;
 @Input() isEven;
 @Input() searchVal;
  constructor() { }

  ngOnInit(): void {
  }

  showData(content){
    console.log(content.id);
    
  }
}
