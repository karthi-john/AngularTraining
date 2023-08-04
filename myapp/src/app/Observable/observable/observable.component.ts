import { Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-observable',
  template: `
    <p>
      observable works!
    </p>
  `,
  styles: [
  ]
})
export class ObservableComponent implements OnInit{


  // Subscribe to the Observable
  ngOnInit(): void {
    const myObservable = new Observable<number>((observer) => {
      // Emit values to the observer
      observer.next(1); // Emit the first value
      observer.next(2); // Emit the second value
      observer.next(3); // Emit the third value

      observer.complete();

    });
    const observer = {
      next: (value: number) => console.log('Received value:', value),
      error: (error: any) => console.error('Error:', error),
      complete: () => console.log('Observable complete!')
    };

    myObservable.subscribe(observer);
  }

}
