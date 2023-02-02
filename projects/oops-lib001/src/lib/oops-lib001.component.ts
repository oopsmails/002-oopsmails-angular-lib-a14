import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oopslib001-oops-lib001',
  template: ` <p>oopslib001-oops-lib001 test works!</p> `,
  styles: [],
})
export class OopsLib001Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Testing lib, if you see this, then OopsLib001Component is working!');
  }
}
