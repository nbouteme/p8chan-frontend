import { Component, OnInit } from '@angular/core';
import { ChanService } from '../chan.service';
import { Board } from 'src/apiv1';


type fff = Omit<{f:number}, 'f'>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private chanService: ChanService) { }

  boards: Board[];
  ngOnInit() {
    this.chanService.getBoards().subscribe(v => this.boards = v);
  }

}
