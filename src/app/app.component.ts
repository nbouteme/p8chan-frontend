import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p8chan';

  constructor(
    private router: Router
  ) {}

  gotoRoot() {
    this.router.navigateByUrl('/')
  }
}
