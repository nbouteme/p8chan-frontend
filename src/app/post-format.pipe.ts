import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeValue } from '@angular/platform-browser';

@Pipe({
  name: 'postformat',
  pure: true
})
export class PostformatPipe implements PipeTransform {
  constructor(private san: DomSanitizer) {

  }

  escape(v: string) {
    return v
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  transform(value: string, threadid: number, board: string): SafeHtml {
    let e = (v: string) => this.escape(v);
    let v = e(value).split('\n').map(l =>
      l.replace(/(\s|^)(&gt;&gt;\d+)(\s|$)/, a =>
         `<a href="/boards/${board}/${threadid}#p${a.substr(8)}">${a}</a>`
      )
    ).map(l =>
      (/^&gt;[^&gt;]|^&gt;&gt;\D/.test(l)) ?
        `<span class="quote">${l}</span>` : l
    ).join('<br>\n');
    return this.san.bypassSecurityTrustHtml(v);
  }
}
