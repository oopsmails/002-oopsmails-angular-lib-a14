import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OopsLib001Service {
  constructor() {}
  doSomething() {
    console.log('Testing lib, if you see this, then OopsLib001Service is working! Test branch!');
  }
}
