import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    if (value === '') {
      return value;
    }

    let charArray: Array<string> = value.split('');
    charArray.splice(0, 0, '(');
    charArray.splice(3, 0, ')');
    charArray.splice(4, 0, ' ');

    if (value.length === 10) {
      charArray.splice(9, 0, '-');
    } else {
      charArray.splice(10, 0, '-');
    }

    return charArray.join('');
  }

}
