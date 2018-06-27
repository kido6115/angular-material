import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
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
import { InboxComponent } from './inbox/inbox.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

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
    CustomeSnackBarComponent,
    InboxComponent,
    TabComponent,
    TableComponent,
    Table2Component,
    MapComponent
    ],
  imports: [
    BrowserModule,BrowserAnimationsModule,SharedMaterialModule, AppRoutingModule,FormsModule,ReactiveFormsModule, SidenavRoutingModule
    ,HttpClientModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgkSTUKQ5NYL99GCmZrNPEaXEoNHi2Mq0',
    language: 'zh-TW'}),HttpClientJsonpModule
  ],
  entryComponents: [AddPostDialogComponent,AddPostConfirmDialogComponent,CustomeSnackBarComponent,InboxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
