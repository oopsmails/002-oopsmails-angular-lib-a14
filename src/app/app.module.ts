import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { OopsLib001Module, OopsLib001Service } from 'oops-lib001';
import { OopsLib001Module } from 'oops-lib001';
import { OopsLib002Module, SharedModule } from 'oops-lib002';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OopsLib001Module,
    OopsLib002Module,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  // providers: [OopsLib001Service], // not needed because it is already declared in OopsLib001Module
})
export class AppModule {}
