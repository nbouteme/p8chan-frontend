import { Injectable } from '@angular/core';
import { Board, Post, Thread } from 'src/apiv1';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChanService {
  constructor(private http: HttpClient) {

  }

  getBoards() {
    return this.http.get<Board[]>('/api/boards');
  }

  getThreads(board: string) {
    return this.http.get<Thread[]>(`/api/boards/${board}`);
  }

  getThread(board: string, thread: number) {
    return this.http.get<Post[]>(`/api/boards/${board}/${thread}`);
  }
}
