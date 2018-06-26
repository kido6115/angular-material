import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatbuttonComponent } from './matbutton/matbutton.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidnavComponent } from './sidnav/sidnav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SecondSidenavComponent } from './second-sidenav/second-sidenav.component';
import { SidenavRoutingModule } from './/sidenav-routing.module';
import { StepperComponent } from './stepper/stepper.component';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { AddPostConfirmDialogComponent } from './add-post-confirm-dialog/add-post-confirm-dialog.component';
import { CustomeSnackBarComponent } from './custome-snack-bar/custome-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MatbuttonComponent,
    SidnavComponent,
    SecondSidenavComponent,
    StepperComponent,
    GridComponent,
    CardComponent,
    AddPostDialogComponent,
    AddPostConfirmDialogComponent,
    CustomeSnackBarComponent
    ],
  imports: [
    BrowserModule,BrowserAnimationsModule,SharedMaterialModule, AppRoutingModule,FormsModule,ReactiveFormsModule, SidenavRoutingModule
    ,HttpClientModule
  ],
  entryComponents: [AddPostDialogComponent,AddPostConfirmDialogComponent,CustomeSnackBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
