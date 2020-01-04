import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/apiv1';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  @Input()
  post: Post;
  @Input()
  op: boolean;
  @Input()
  active: boolean;

  @Output()
  selection = new EventEmitter<number>();

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }


}
