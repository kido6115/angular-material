import { SharedMaterialModule } from './shared-material/shared-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatbuttonComponent } from './matbutton/matbutton.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MatbuttonComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,SharedMaterialModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
