import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardIndexComponent } from './board-index/board-index.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ThreadCardComponent } from './thread-card/thread-card.component';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardIndexComponent,
    PostFormComponent,
    ThreadCardComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
