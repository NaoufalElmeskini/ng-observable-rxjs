import { Injectable } from '@angular/core';
import { timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AService {

  constructor() { }

  doSmth () {
    const source = timer(1000, 2000);
    const subscribe = source.subscribe(value => console.log(value));
    
    // setTimeout(() =>{
    //   subscribe.unsubscribe();
    // }, 2000);
  }
}
