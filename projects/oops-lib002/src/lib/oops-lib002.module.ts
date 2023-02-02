import { NgModule } from '@angular/core';
import { OopsLib002Component } from './oops-lib002.component';
import { OopsLib002Service } from './oops-lib002.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [OopsLib002Component],
  imports: [SharedModule],
  exports: [OopsLib002Component],
  providers: [OopsLib002Service],
})
export class OopsLib002Module {}
