import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatTableDataSource, PageEvent, MatSort, Sort } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  @ViewChild('paginator2') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;


  currentPage: PageEvent;
  currentSort: Sort;
  currentFilterData: string;

  emailsDataSource2 = new MatTableDataSource<any>();
  totalCount=0;
  constructor(private httpClient:HttpClient) { }
  changeSort(sortInfo: Sort) {
    // 因為API排序欄位是created，因此在這邊做調整
    console.log(sortInfo.active);
    if (sortInfo.active === 'created_at') {
      sortInfo.active = 'created';
    }
    this.currentSort = sortInfo;
    this.getIssuees();
  }
  getIssuees(){
    const baseUrl = 'https://api.github.com/search/issues?q=repo:angular/material2';
    let targetUrl = `${baseUrl}&page=${this.currentPage.pageIndex + 1}&per_page=${this.currentPage.pageSize}`;
    if (this.currentSort.direction) {
      targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    }
    if (this.currentFilterData) {
      targetUrl = `${targetUrl}&q=${this.currentFilterData}+in:title`;
    }
    this.httpClient
      .get<any>(targetUrl)
      .subscribe(data => {
        this.totalCount = data.total_count;
        this.emailsDataSource2.data = data.items;
        // 從後端進行排序時，不用指定sort
        // this.emailsDataSource.sort = this.sortTable;
        // 從後端取得資料時，就不用指定data srouce的paginator了
        // this.emailsDataSource.paginator = this.paginator;
      });
  }
  applyFilter(filterValue: string){
    filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.currentFilterData = filterValue;
    this.getIssuees();
  }
  ngOnInit() {
    this.currentPage = {
      pageIndex: 0,
      pageSize: 10,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    this.getIssuees();

    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      this.currentPage = page;
      this.getIssuees();
    });
  }

}
