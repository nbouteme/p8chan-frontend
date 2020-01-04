import { Component, OnInit, Input, SecurityContext, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/apiv1';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input()
  post: Post;

  @Input()
  resto: number;

  san: DomSanitizer;
  constructor(private route: ActivatedRoute,
    san: DomSanitizer
  ) { 
    this.san = san;
  }

  @Output()
  selection = new EventEmitter<number>();

  board: string;
  thread: number;

  ngOnInit() {
    this.board = this.route.snapshot.paramMap.get('name');
    this.thread = (+this.route.snapshot.paramMap.get('tid')) || this.resto;
  }
}
