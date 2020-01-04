import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoardIndexComponent } from './board-index/board-index.component';
import { PostFormComponent } from './post-form/post-form.component';
import { ThreadCardComponent } from './thread-card/thread-card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { QuickReplyComponent } from './quick-reply/quick-reply.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { CaptchaFormComponent } from './captcha-form/captcha-form.component';
import { PostformatPipe } from './post-format.pipe';
import { SortPipe } from './sort.pipe';
import { PostInfoComponent } from './post-info/post-info.component';
import { ReversePipe } from './reverse.pipe';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBoardFormComponent } from './create-board-form/create-board-form.component';
import { LogLinkComponent } from './log-link/log-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardIndexComponent,
    PostFormComponent,
    ThreadCardComponent,
    PostCardComponent,
    QuickReplyComponent,
    CaptchaFormComponent,
    PostformatPipe,
    SortPipe,
    PostInfoComponent,
    ReversePipe,
    LoginComponent,
    DashboardComponent,
    CreateBoardFormComponent,
    LogLinkComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AngularDraggableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
