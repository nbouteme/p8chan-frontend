import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Board, PostData, ServerPostData } from 'src/apiv1';

@Injectable({
  providedIn: 'root'
})
export class ChanService {

  constructor() {

  }

  getBoards(): Observable<Board[]> {
    return of<Board[]>([{
      bump_limit: 150,
      filesize_limit: 3505654,
      name: 'g',
      title: 'Technology',
      worksafe: true
    }])
  }

  getThreads(board: string): Observable<ServerPostData[]> {
    return of<ServerPostData[]>([
      { id: 4, comment: '32', subject: 'lel', date: 1516 },
      { id: 5, comment: '32t45', subject: 'lel', date: 1517 },
      { id: 6, comment: '352', subject: 'lel', date: 1518 },
      { id: 7, comment: '3542', subject: 'lel', date: 1519 },
    ])
  }

  getThread(board: string, thread: number): Observable<ServerPostData[]> {
    return of<ServerPostData[]>([
      { id: 4, comment: '32', subject: 'lel', date: 1516 },
      { id: 5, comment: '32t45', subject: 'lel', date: 1517 },
      { id: 6, comment: '352', subject: 'lel', date: 1518 },
      { id: 7, comment: '3542', subject: 'lel', date: 1519 },
    ])
  }
}
