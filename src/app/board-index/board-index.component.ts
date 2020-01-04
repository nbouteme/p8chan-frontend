import { Component, OnInit } from '@angular/core';
import { ChanService } from '../chan.service';
import { Board, Thread } from 'src/apiv1';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-board-index',
  templateUrl: './board-index.component.html',
  styleUrls: ['./board-index.component.css']
})
export class BoardIndexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
  }

  threads: Thread[];
  board: Board;
  ngOnInit() {
//    let name = this.route.snapshot.paramMap.get('name');
    this.route.data
      .subscribe((v: { threads: Thread[], board: Board }) => {
        this.threads = v.threads;
        this.board = v.board;
      });
  }
}
