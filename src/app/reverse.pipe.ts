import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe implements PipeTransform {

  transform<T>(value: T[]): T[] {
    let r = value.slice();
    return r.reverse();
  }

}
