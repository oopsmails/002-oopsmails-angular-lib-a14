import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'oops-lib002';
import { HelloComponent } from './components/hello.component';

const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'hello', component: HelloComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
