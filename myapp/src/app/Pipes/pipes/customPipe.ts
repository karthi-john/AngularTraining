import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
  name: 'customPipe'
})
export class CustomPipe implements PipeTransform{
  transform(value: any, ...args: any[]) {
    return 'karthick';
  }

}
