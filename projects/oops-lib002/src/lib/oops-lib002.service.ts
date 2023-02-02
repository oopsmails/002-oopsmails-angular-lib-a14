import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OopsLib002Service {
  constructor() {}
  doSomething() {
    console.log('Testing lib, if you see this, then OopsLib002Service is working!');
  }
}
