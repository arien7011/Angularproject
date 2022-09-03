import { ParseFlags } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute ,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
    _searchTerm:any= "";
    inventoryId;
    public selectedId;
  @Output() filterlist= new EventEmitter<any>();
  @Input() myword: string;
  @Output() eventMessage = new EventEmitter<any>();
  totalMoney: number = 3000;
  constructor(private route:ActivatedRoute, private myroute:Router) { }

  ngOnInit(): void {
    // let id= this.route.snapshot.paramMap.get('id') ... this is not a good approach
    // this.inventoryId= id;
  this.route.paramMap.subscribe((params:ParamMap)=>{  //this is an optimum approach to read the value of the route parameter
      let id=parseInt(params.get('id'));
       this.inventoryId= id;
  });

  }

  searchListProduct(){
    this.filterlist.emit(this._searchTerm);
  }

  callParent() {
    this.eventMessage.emit();
  }

  goPrevious(){
    let previousId  = this.inventoryId - 1;
    // this.myroute.navigate(['/Inventory', previousId]);
    this.myroute.navigate(['/Inventory-list',previousId])
    
  }

  goNext(){
    let nextId = this.inventoryId + 1;
    this.myroute.navigate(['/Inventory-list', nextId]);
  }

  gotoInventory(){
    this.selectedId= this.inventoryId ? this.inventoryId :null
    // this.myroute.navigate(['/Inventory',{ id:this.selectedId}])
    this.myroute.navigate(['../' ,{id:this.selectedId}],{relativeTo:this.route})
    //so here we have used three arguments as required first for defining the path i.e go back to one segment in the url (i.e from /1 to 
    // /inventory-list or inventory as specified based on parent route changes)and optional parameter and then relative path .
  }
}


