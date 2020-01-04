import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Thread, Post, Board } from 'src/apiv1';
import { ChanService } from './chan.service';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardResolveService implements Resolve<Thread[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      return this.cs.getThreads(route.paramMap.get('name'));
    } catch (e) {
      console.log(e);

      this.router.navigate(['/']);
      return EMPTY.toPromise();
    }
  }
  constructor(private cs: ChanService, private router: Router) { }
}

@Injectable({
  providedIn: 'root'
})
export class ThreadResolveService implements Resolve<Post[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      return this.cs.getThread(route.paramMap.get('name'), +route.paramMap.get('tid'));
    } catch (e) {
      console.log(e);
      this.router.navigate(['/']);
      return EMPTY.toPromise();
    }
  }
  constructor(private cs: ChanService, private router: Router) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChanResolveService implements Resolve<Board> {
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      return (await this.cs.getBoards().toPromise()).find(e => e.name == route.paramMap.get('name'));
    } catch (e) {
      console.log(e);

      this.router.navigate(['/']);
      return EMPTY.toPromise();
    }
  }
  constructor(private cs: ChanService, private router: Router) { }
}
