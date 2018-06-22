import { map, debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// custome option label
export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{ provide: MatStepperIntl, useClass: TwStepperIntl }]

})
export class StepperComponent implements OnInit {
  isLinear: boolean;
  basicFormGroup: FormGroup;
  fullGroupForm: FormGroup;
  countries$: Observable<any[]>;
  majorTechList: any[];


  constructor(private httpClient: HttpClient) {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.fullGroupForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        intro: new FormControl('', [Validators.required, Validators.minLength(10)]),
        country: new FormControl(''),
        majorTech: new FormControl('')
      })
    });
  }


  ngOnInit() {
    this.fullGroupForm.get('basicQuestions').get('country').valueChanges.pipe(debounceTime(300)).subscribe(inputCountry => {
      this.countries$ = this.httpClient.get<any[]>('assets/countries.json').pipe(map(countries => {
        return countries.filter(country => country.name.indexOf(inputCountry) >= 0);
      }));
    });
    this.majorTechList = [
      {
        name: '前端',
        items: ['HTML', 'CSS', 'JavaScript']
      },
      {
        name: '後端',
        items: ['C#', 'NodeJs', 'Go']
      }
    ];
  }
  displayCountry(country: any) {
        if (country) {
      return country;
    } else {
      return '';
    }
  }
  highlightFiltered(countryName: string) {
    const inputCountry = this.fullGroupForm.get('basicQuestions').get('country').value;
    return countryName.replace(inputCountry, `<a>${inputCountry}</a>`);
  }
}
