import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/body/form/form.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './pages/body/body.component';

const routes: Routes = [ {path: 'my-form', component: FormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
