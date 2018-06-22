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

@NgModule({
  declarations: [
    AppComponent,
    MatbuttonComponent,
    SidnavComponent,
    SecondSidenavComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,SharedMaterialModule, AppRoutingModule,FormsModule,ReactiveFormsModule, SidenavRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
