import { NgModule } from '@angular/core';
import { OopsLib001Component } from './oops-lib001.component';
import { OopsLib001Service } from './oops-lib001.service';

@NgModule({
  declarations: [OopsLib001Component],
  imports: [],
  exports: [OopsLib001Component],
  providers: [OopsLib001Service],
})
export class OopsLib001Module {}
