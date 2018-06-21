import { MatbuttonComponent } from './matbutton/matbutton.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

const routes:Routes=[
  {path:'button',component:MatbuttonComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},

  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
