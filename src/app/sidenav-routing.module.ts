import { Routes, RouterModule } from '@angular/router';
import { SidnavComponent } from './sidnav/sidnav.component';
import { NgModule } from '@angular/core';
import { SecondSidenavComponent } from './second-sidenav/second-sidenav.component';
import { StepperComponent } from './stepper/stepper.component';
const routes: Routes = [
  {
    path: 'sidenav',
    component: SidnavComponent,
    children: [{ path: 'second', component: SecondSidenavComponent }
              ,{path:'',redirectTo:'/',pathMatch:'full'}
              ,{ path: 'stepper', component: StepperComponent }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SidenavRoutingModule { }
