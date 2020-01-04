import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Challenge, PostUpload, PostUploadWithFile } from 'src/apiv1';
import { map } from 'rxjs/operators';

export let extractPayload = (token: string) => JSON.parse(atob(token.split('.')[1]));

@Injectable({
  providedIn: 'root'
})
export class PostAuthService {
  decodedtoken: { for: string, exp: number };
  token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
    if (this.token)
      this.decodedtoken = extractPayload(this.token);
    if (!this.canPost()) {
      localStorage.removeItem('token');
      this.decodedtoken = null;
      this.token = null;
    }
  }

  canPost() {
    return this.decodedtoken && this.decodedtoken.exp > +Date.now();
  }

  async getChallenge() {
    return this.http.get<string>('/api/challenge').pipe(map(c => [extractPayload(c), c] as [Challenge, string])).toPromise();
  }

  async getAuth(ans: string, token: string) {
    let v = await this.http.post<string>('/api/challenge', {
      ans,
      token
    }).toPromise();
    this.token = v;
    this.decodedtoken = extractPayload(this.token);
    localStorage.setItem('token', v);
  }

  buildUploadForm(p: PostUpload): FormData {
    if (!p.challenge)
      throw "You need a valid captcha to post"

    let form = new FormData();
    for (let k in p) {
      if (!p[k])
        continue;
      if (k == 'file' && p.file)
        form.append(k, p.file, p.file.name);
      else
        form.append(k, p[k]);
    }
    return form;
  }

  async sendPost(board: string, tid: number, p: PostUpload) {
    let form = this.buildUploadForm(p);
    await this.http.post(`/api/boards/${board}/${tid}`, form).toPromise();
  }

  async createThread(board: string, p: PostUploadWithFile) {
    let form = this.buildUploadForm(p);
    return await this.http.post<number>(`/api/boards/${board}`, form).toPromise();
  }
}
