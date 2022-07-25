import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ContentListComponent } from './content-list/content-list.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: 'list', component: ContentListComponent },
  { path: 'list/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: NotfoundComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
