import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Board } from 'src/apiv1';
import { PostAuthService } from '../post-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { decodeError } from '../captcha-form/captcha-form.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: PostAuthService) { }

  @Input()
  board: Board;

  ngOnInit() {
  }

  name: string;
  email: string;
  sub: string;
  com: string;
  ans: string;

  @ViewChild("upfile")
  upfileRef: ElementRef;

  error: string;
  async onSubmit() {
    try {
      this.error = '';
      let fileElem = this.upfileRef.nativeElement as HTMLInputElement;
      if (fileElem.files.length == 0)
        throw "You need to upload a file"
      let newId = await this.auth.createThread(this.board.name, {
        challenge: this.auth.token,
        email: this.email,
        name: this.name,
        file: fileElem.files[0],
        comment: this.com,
        subject: this.sub
      });
      this.router.navigate(['/boards', this.board.name, newId]);
    } catch (e) {
      this.error = decodeError(e);
    }
  }
}
