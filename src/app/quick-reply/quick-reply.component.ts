import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PostAuthService } from '../post-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { decodeError } from '../captcha-form/captcha-form.component';

@Component({
  selector: 'app-quick-reply',
  templateUrl: './quick-reply.component.html',
  styleUrls: ['./quick-reply.component.css']
})
export class QuickReplyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: PostAuthService) { }

  @Input()
  resto: number;

  @Input()
  event: Observable<number>;

  @Output()
  closed = new EventEmitter<void>();

  name: string;
  email: string;
  sub: string;
  com: string;
  ans: string;

  error: string;

  @ViewChild("upfile")
  upfileRef: ElementRef;

  board: string;
  visible = false;

  ngOnInit() {
    this.board = this.route.snapshot.paramMap.get('name');

    this.event.subscribe(r => {
      this.visible = true;
      this.com = this.com || '';
      this.com += `>>${r}\n`;
    });
    this.closed.subscribe(() => this.visible = false)
  }

  async onSubmit() {
    let fileElem = this.upfileRef.nativeElement as HTMLInputElement;
    try {
      this.error = '';
      await this.auth.sendPost(this.board, this.resto, {
        challenge: this.auth.token,
        email: this.email,
        name: this.name,
        file: fileElem.files[0],
        comment: this.com,
        subject: this.sub
      });
      this.com = '';
      this.sub = '';
      this.closed.emit();
      this.visible = false;
      this.router.navigate(['/boards', this.board, this.resto]);
    } catch (e) {
      this.error = decodeError(e);
    }
  }
}
