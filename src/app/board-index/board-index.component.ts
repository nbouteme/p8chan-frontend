import { Component, OnInit } from '@angular/core';
import { ChanService } from '../chan.service';
import { ServerPostData, Board } from 'src/apiv1';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-index',
  templateUrl: './board-index.component.html',
  styleUrls: ['./board-index.component.css']
})
export class BoardIndexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private chanService: ChanService) {

  }

  private threads: ServerPostData[];
  private board: Board;
  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.chanService
      .getThreads(name)
      .subscribe(v => this.threads = v);
    this.chanService
      .getBoards()
      .subscribe(v => this.board = v.find(e => e.name == name));
  }
}
