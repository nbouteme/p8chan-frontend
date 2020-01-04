import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { extractPayload } from './post-auth.service';
import { Identity, Board, BoardSetting } from 'src/apiv1';

@Injectable({
  providedIn: 'root'
})
export class AdminCapService {
  token: string;
  decodedtoken: Identity;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('admin');
    if (this.token)
      this.decodedtoken = extractPayload(this.token);
    if (!this.isAuth()) {
      localStorage.removeItem('admin');
      this.decodedtoken = null;
      this.token = null;
    }
  }

  async getAuth(ident: string, pass: string) {
    console.log('in');
    this.token = await this.http.post<string>("/admin/login", { ident, pass }).toPromise();
    console.log('2');
    this.decodedtoken = extractPayload(this.token);
    localStorage.setItem('admin', this.token);
    console.log('3');
  }

  isAuth() {
    return this.token && +Date.now() < this.decodedtoken.expiration;
  }

  async createBoard(b: BoardSetting) {
    await this.http.post('/admin/boards', b, { headers: { 'Authorization': `bearer ${this.token}` } }).toPromise();
  }
}
