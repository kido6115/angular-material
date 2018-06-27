import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort, MatPaginatorIntl } from '@angular/material';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild('filter') filter: ElementRef;

  emailsDataSource = new MatTableDataSource<any>();
  totalCount=0;
  constructor(private httpClient:HttpClient,private matPaginatorIntl: MatPaginatorIntl) { }
  applyFilter(filterValue: string){
    this.emailsDataSource.filterPredicate = (data: any, filter: string): boolean => {
      //搜尋欄位
      return data.title.indexOf(filter) !== -1||data.user.login.indexOf(filter) !== -1;
    };
    filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.emailsDataSource.filter = filterValue;
  }
  changeLanguage(){
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        return `第 0 筆、共 ${length} 筆`;
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

      return `第 ${startIndex + 1} - ${endIndex} 筆、共 ${length} 筆`;
    };

    // 設定其他顯示資訊文字
    this.matPaginatorIntl.itemsPerPageLabel = '每頁筆數：';
    this.matPaginatorIntl.nextPageLabel = '下一頁';
    this.matPaginatorIntl.previousPageLabel = '上一頁';
  }
  ngOnInit() {
    this.changeLanguage();
    this.httpClient.get<any>('https://api.github.com/search/issues?q=repo:angular/material2&page=1').subscribe(data=>{
      this.totalCount = data.items.length;
      this.emailsDataSource.data = data.items;
      this.emailsDataSource.paginator = this.paginator;
      this.emailsDataSource.sort = this.sortTable;

    });
  }

}
