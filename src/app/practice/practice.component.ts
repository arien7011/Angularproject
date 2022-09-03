import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { profile } from './Profile';
import { OrderPipe } from 'ngx-order-pipe';
import { InventoryComponent } from '../inventory/inventory.component';
import { FilterComponent } from '../filter/filter.component';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']

})

export class PracticeComponent implements OnInit, AfterViewInit {
  myMessage:string="hey I am a child"
    @Input() childMessage: string;
   @Output() messageEvent= new EventEmitter()
  @ViewChild(InventoryComponent) child;
  @ViewChild(FilterComponent) filt
  public page= 1;
  public pageSize=8;
  message: string = 'Welcome to my website';
  orders: string;
  wording: string = 'welcome heroes'
  DataList:any= [];
  public errorMsg;
  moneytotal: number;
  mess: any;
  yourName: string = 'Aman Mishra'
  banr: string = '**Enjoy your day**';
  filteredList:any =[];
  private _searchTerm: any = "";
  product: string = 'addidas shoes';

  get searchTerm(): string {
    return this._searchTerm;

  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredList = this.filtereList(value);
  }
  order: string = 'info.name';
  reverse: boolean = false;
  caseInsensitive: boolean = false;


  constructor(private orderPipe: OrderPipe, private httpClient: HttpClient,private emp_service:EmployeeService) {
    this.DataList = orderPipe.transform(this.emp_service.getEmployee().subscribe((response) => {
      this.DataList = response;
    }), 'name');
    console.log(this.DataList);

   
  }


  ngOnInit() {
    this.emp_service.getEmployee().subscribe(data =>
      this.filteredList= data,
      error=> this.errorMsg= error,
   
     
    
    );
  }

  greet() {
    alert(this.message)
  }

  ngAfterViewInit() {
    this.orders = this.child.myorder
    this.moneytotal = this.filt.totalMoney;
  }

  sendingforChild() {
    this.mess = 'Jai Shri Ram'
  }

  callParentThing(){
   this.messageEvent.emit();
  }

  getCssClass(flag: string) {
    let myCss;
    if (flag == "mode") {
      myCss = {
        'six': true,
        'one': false
      }
    }
    else {
      myCss = {
        'two': true,
        'four': false
      }

    }
    return myCss;
  }



  filtereList(searchString: string) {
    return this.DataList.filter(profile =>
      profile.name.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1 ||
      profile.email.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1 ||
      profile.state.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1 ||
      profile.phone.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1)

  }




  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }


}
