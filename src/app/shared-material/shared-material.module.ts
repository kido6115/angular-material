import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatSidenavModule, MatToolbarModule, MatRadioModule, MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,MatIconModule,MatButtonToggleModule,MatSidenavModule,MatToolbarModule,MatRadioModule,MatListModule,MatMenuModule,
    MatStepperModule,MatFormFieldModule,MatInputModule,MatAutocompleteModule
    
  ],
  declarations: []
})
export class SharedMaterialModule { }
