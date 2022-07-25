import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from './data/mockContent';
import { Content } from './models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {



  getContent(): Observable<Content[]>{
    const contents = of(content);
    return contents;
  }



    getContentOnIdbasis(id): Observable<Content>{
      for (let index = 0; index < content.length; index++) {
        const element = content[index];
        if (element.id == id) {
          return of(element);
        }
      }
      return of({id:-1, title: '', author: '',
        type: '', hashtags:[]});
    }

    addContent(newContentItem: Content): Observable<Content[]>{
      content.push(newContentItem);
return of(content);
}

updateContent(contentItem: Content): Observable<Content[]>{
  for (let index = 0; index < content.length; index++) {
    const element = content[index];
    if (element.id == contentItem.id) {
      content[index] = contentItem;
      return of(content);
    }
  }
  }

  deleteContent(id: number): Observable<Content>{
    let item;
    for (let index = 0; index < content.length; index++) {
      const element = content[index];
      if (element.id == id) {
        item = content[index];
        content.splice(index, 1);
        return of(item);
      }
    }
    }

 

 

}
