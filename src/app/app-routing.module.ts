import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoardIndexComponent } from './board-index/board-index.component';
import { ThreadCardComponent } from './thread-card/thread-card.component';
import { BoardResolveService, ThreadResolveService, ChanResolveService } from './chan-resolve.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { boards: ChanResolveService } },
  { path: 'boards/:name', component: BoardIndexComponent, resolve: { board: ChanResolveService, threads: BoardResolveService } },
  { path: 'boards/:name/:tid', component: ThreadCardComponent, resolve: { board: ChanResolveService, thread: ThreadResolveService } },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dash', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
