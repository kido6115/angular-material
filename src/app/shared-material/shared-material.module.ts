import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatSidenavModule, MatToolbarModule, MatRadioModule, MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatDatepickerModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatSelectModule, MatCheckboxModule, MatSlideToggleModule, MatSliderModule, MatGridListModule, MatCardModule, MatProgressBarModule, MatProgressSpinnerModule, MatDialogModule, MatChipsModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import{MatMomentDateModule} from '@angular/material-moment-adapter';

export const TW_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};
@NgModule({
  exports: [
    MatButtonModule,MatIconModule,MatButtonToggleModule,MatSidenavModule,MatToolbarModule,MatRadioModule,MatListModule,MatMenuModule,
    MatStepperModule,MatFormFieldModule,MatInputModule,MatAutocompleteModule,MatDatepickerModule,MatMomentDateModule,MatSelectModule,
    MatCheckboxModule,MatSlideToggleModule,MatSliderModule,MatGridListModule,MatCardModule,MatProgressBarModule,MatProgressSpinnerModule,
    MatDialogModule,MatChipsModule,MatTooltipModule,MatSnackBarModule
    
  ],
  declarations: [],
  providers:[{provide: MAT_DATE_LOCALE, useValue: 'zh_TW' },
  { provide: MAT_DATE_FORMATS, useValue: TW_FORMATS }
]
})
export class SharedMaterialModule { }
