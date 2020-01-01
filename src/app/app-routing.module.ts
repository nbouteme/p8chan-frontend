import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardIndexComponent } from './board-index/board-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boards/:name', component: BoardIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
