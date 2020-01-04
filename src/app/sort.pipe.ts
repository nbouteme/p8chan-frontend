import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {
  transform<T extends {[k in keyof T]: number}>(value: T[], field: keyof T): T[] {
    let r = value.slice();
    r.sort((a, b) => a[field] - b[field]);
    return r;
  }
}
