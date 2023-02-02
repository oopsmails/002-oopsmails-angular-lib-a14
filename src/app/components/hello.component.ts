import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OopsLib001Service } from 'oops-lib001';
import { OopsLib002Service, RandomItem, SharedDataService } from 'oops-lib002';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  projectDescription: String = 'Testing Angular Lib Sharing';
  randomItems$: Observable<RandomItem[]>;

  constructor(
    private router: Router,
    private oopsLib001Service: OopsLib001Service,
    private oopsLib002Service: OopsLib002Service,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.oopsLib001Service.doSomething();
    this.oopsLib002Service.doSomething();
    this.randomItems$ = this.sharedDataService.getRandomItems(30, 2000);
  }

  navToPage(page) {
    console.log('HomeComponent, navToPage, page = ' + page);
    this.router.navigateByUrl(page);
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
