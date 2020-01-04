import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, Thread } from 'src/apiv1';
import { ChanService } from '../chan.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.css']
})
export class ThreadCardComponent implements OnInit {
  @Input()
  op: Thread;

  @Output()
  selection = new EventEmitter<number>();

  event = new Subject<number>();

  constructor(private route: ActivatedRoute,
    private chanService: ChanService,
    private location: Location) { }

  opening: Post;
  replies: Post[];
  board: string;
  active: boolean;

  async ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.active = !this.op; // Si rien n'a été bind, alors le thread est utilisé comme vue
    this.board = name;
    await this.reload();
  }

  async reload() {
    let id = this.op ? this.op.id : +this.route.snapshot.paramMap.get('tid');
    let t = await this.chanService.getThread(this.board, id).toPromise()
    this.opening = t.shift();
    this.replies = t;
  }

  onClose() {
    console.log('close emited');
    return this.reload();
  }

  goBack() {
    this.location.back();
  }

  onSelect(id: number) {
    this.event.next(id);
  }
}
