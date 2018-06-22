import { SidnavComponent } from './sidnav/sidnav.component';
import { MatbuttonComponent } from './matbutton/matbutton.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

const routes:Routes=[
  {path:'button',component:MatbuttonComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'sidenav',component:SidnavComponent},

  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
