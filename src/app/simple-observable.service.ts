import { Injectable } from '@angular/core';
import { Observable, Observer, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimpleObservableService {

  constructor() { }

  observeWithOf() : string[] {
    let upperCased: string[] = [];
    const fruitObservable$ = of('orange', 'pear', 'apple');
    fruitObservable$.subscribe({
      next(val: string) {
        upperCased.push(val.toUpperCase());
        console.log('upperCased: ' + upperCased);
      },
      error(err: string) {console.error('error: ' + err);},
      complete() {console.log('completed!');}
    });
    return upperCased;
  }

  observeWithCstrctr(): string[] {
    let upperCased : string[] = [];
    console.log('jobObserve...');
    
    const jobObservable = new Observable((observer: Observer<string>) => {
      observer.next('builder');
      observer.next('pilote');
      observer.next('cook');
      return () => { console.log('doing nothing'); };
    });

    jobObservable.subscribe({
      next(value: string) {
        console.log('Aaaaaand theeee next value iiiiiis: ' + value);
        upperCased.push(value.toUpperCase());
      },
      error(error: string) {console.error('Aaaaaand theeee error: ' + error);},
      complete() {console.log('Aaaaaand compleeted!!');}
    });
    
    return upperCased;
  }
}
