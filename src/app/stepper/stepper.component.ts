import { map, debounceTime } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepperIntl, MatCheckboxChange } from '@angular/material';
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
  interestList:any[];
  nestInterestList: any[];
  indeterminateSelectedPayFor: boolean;

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
        majorTech: new FormControl(''),
        birthday: new FormControl({ value: ''}),
        interest: new FormControl(null)
      }),
      mainQuestions:new FormGroup({
        payForAll: new FormControl(false),
        payForBook: new FormControl(false),
        payForMusic: new FormControl(false),
        payForMovie: new FormControl(true),
        angularLikeScore:new FormControl(1),
        subscribeAngular: new FormControl(true),
        subscribeAngularMaterial: new FormControl(false),
        subscribeNgRx: new FormControl(true),
      }),
      otherQuestions:new FormGroup({
        favoriteColorRed: new FormControl(0),
        favoriteColorGreen: new FormControl(0),
        favoriteColorBlue: new FormControl(0)
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
    this.interestList = [
      {
        id: 1,
        name: '桌球'
      },
      {
        id: 2,
        name: '網球'
      },
      {
        id: 3,
        name: '羽球'
      }
    ];
    this.nestInterestList = [
      {
        id: 1,
        name: '球類',
        subItems: [
          {
            id: 11,
            name: '桌球'
          },
          {
            id: 12,
            name: '網球'
          },
          {
            id: 13,
            name: '羽球'
          }
        ]
      },
      {
        id: 2,
        name: '其他',
        subItems: [
          {
            id: 21,
            name: '游泳'
          },
          {
            id: 22,
            name: '跑步'
          }
        ]
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
  checkAllChange($event:MatCheckboxChange){
    this.fullGroupForm
      .get('mainQuestions')
      .get('payForBook')
      .setValue($event.checked);
    this.fullGroupForm
      .get('mainQuestions')
      .get('payForMusic')
      .setValue($event.checked);
    this.fullGroupForm
      .get('mainQuestions')
      .get('payForMovie')
      .setValue($event.checked);
    this._setSelectAllState();
  }
  payForChange() {
    this._setSelectAllState();
  }

  private _setSelectAllState() {
    const payForBook = this.fullGroupForm.get('mainQuestions').get('payForBook').value;
    const payForMusic = this.fullGroupForm.get('mainQuestions').get('payForMusic').value;
    const payForMovie = this.fullGroupForm.get('mainQuestions').get('payForMovie').value;
    const count = (payForBook ? 1 : 0) + (payForMusic ? 1 : 0) + (payForMovie ? 1 : 0);
    this.fullGroupForm.get('mainQuestions').get('payForAll').setValue(count === 3);
    this.indeterminateSelectedPayFor = count > 0 && count < 3;
  }
  get selectedColorRed() {
    return this.fullGroupForm.get('otherQuestions').get('favoriteColorRed').value;
  }

  get selectedColorGreen() {
    return this.fullGroupForm.get('otherQuestions').get('favoriteColorGreen').value;
  }
  
  get selectedColorBlue() {
    return this.fullGroupForm.get('otherQuestions').get('favoriteColorBlue').value;
  }

  // 組合顏色樣式
  get selectedColorStyle() {
    return `rgb(${this.selectedColorRed}, ${this.selectedColorGreen}, ${this.selectedColorBlue})`;
  }
}
