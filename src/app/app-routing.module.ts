import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoappComponent } from './components/todoapp/todoapp.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"todoapp",component:TodoappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
