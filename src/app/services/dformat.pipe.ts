import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'dformat'
})

export class DformatPipe implements PipeTransform{
    transform(value: string) {
        let datePipe = new DatePipe("en-US");
         value = datePipe.transform(value, 'yyyy-MM-dd') || '';
         return value;
     }
}