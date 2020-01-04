import { Component, OnInit } from '@angular/core';
import { AdminCapService } from '../admin-cap.service';
import { decodeError } from '../captcha-form/captcha-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AdminCapService, private router: Router) { }

  name = '';
  title = '';
  worksafe = false;
  filesize_limit = 3000000;
  bump_limit = 150;

  ngOnInit() {
  }

  error = '';
  async createBoard() {
    try {
      this.error = '';
      await this.auth.createBoard({
        name: this.name,
        bump_limit: this.bump_limit,
        filesize_limit: this.filesize_limit,
        title: this.title,
        worksafe: this.worksafe
      });
      this.router.navigateByUrl(`/boards/${this.name}`);
    } catch (e) {
      this.error = decodeError(e);
    }
  }

}
