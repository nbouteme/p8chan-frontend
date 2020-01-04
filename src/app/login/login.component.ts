import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCapService } from '../admin-cap.service';
import { decodeError } from '../captcha-form/captcha-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AdminCapService,
    private router: Router) { }

  ident = '';
  pass = '';

  ngOnInit() {
    if (this.auth.isAuth())
      this.router.navigateByUrl('/admin/dash');
  }

  error: string;
  async doLogin() {
    try {
      this.error = '';
      await this.auth.getAuth(this.ident, this.pass);
      console.log('auth succ')
      this.router.navigateByUrl('/admin/dash');
    } catch (e) {
      this.error = decodeError(e);
    }
  }
}
