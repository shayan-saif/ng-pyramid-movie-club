import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  @Input() 

  transform(value: any[]): unknown {
    return value.slice().reverse();
  }

}
