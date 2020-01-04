import { Component, OnInit, SecurityContext } from '@angular/core';
import { Challenge } from 'src/apiv1';
import { PostAuthService } from '../post-auth.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export let decodeError = (e: any) => {
  let r = 'An unknown error occured';
  if (e && e.error && e.error.reason)
    r = e.error.reason;
  if (typeof e == "string")
    r = e;
  return r;
}

@Component({
  selector: 'app-captcha-form',
  templateUrl: './captcha-form.component.html',
  styleUrls: ['./captcha-form.component.css']
})
export class CaptchaFormComponent implements OnInit {
  constructor(private auth: PostAuthService, private sanitizer: DomSanitizer) { }

  ans: string;

  cap: Challenge;
  capsvg: SafeHtml;
  error: string;

  canpost = false;
  token: string;
  async ngOnInit() {
    this.canpost = this.auth.canPost();
    if (!this.canpost) {
      let c = await this.auth.getChallenge();
      this.cap = c[0];
      this.token = this.cap.verif;
      this.capsvg = this.sanitizer.bypassSecurityTrustHtml(c[0].cap);
    }
  }

  async onClick() {
    try {
      this.error = '';
      await this.auth.getAuth(this.ans, this.token);
    } catch (e) {
      this.error = decodeError(e);
    }
    this.canpost = this.auth.canPost() // >no computed properties smh
  }
}
