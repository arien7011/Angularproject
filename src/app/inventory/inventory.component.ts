import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { TabsetComponent, TabsetConfig } from 'ngx-bootstrap/tabs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router'
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() prod: string;
  myID = "testID"
  myorder: string = 'Amazon Orders'
  isDisabled: false;
  public SelectedId;
  public greeting = "";
  color = "red";
  name = "";
   sendmessage:any='Jai Shri Ram';
   message:any='Jai Shri Ram'
  mymessage = true;
  colors = ["red", "blue", "green", "orange"];
  @Output() send = new EventEmitter<any>();

  constructor(private router:Router, private route:ActivatedRoute) { }
  
  person: any = [
    { 'id':'1', 'name': 'aman', 'age': '24', 'gender': 'male'},
    { 'id':'2', 'name': 'shivam', 'age': '24', 'gender': 'male'},
    { 'id':'3', 'name': 'vishal', 'age': '24', 'gender': 'male'},
    { 'id':'4', 'name': 'arien', 'age': '24', 'gender': 'male'},
  ]

  public date = new Date();
  @ViewChild('tabset') tabset: TabsetComponent;
  today: number = Date.now();
  

  // updatePrev() {   
  //   const id=this.tabset.tabs.filter(tab=>tab.active == true)[0].id;
  //   if(Number(id)-1 >= 0) {
  //   this.tabset.tabs.filter(tab=>Number(tab.id) == (Number(id))-1)
  //   this.tabset.tabs[(Number(id))-1].active = true;
  //   }
  // }

  // updateNext(){   
  //  let count = this.tabset.tabs.length;
  //   const id=this.tabset.tabs.filter(tab=>tab.active == true)[0].id;
  //   if(Number(id)+1 < count) {
  //     this.tabset.tabs.filter(tab=>Number(tab.id) == (Number(id))+1)
  //     this.tabset.tabs[(Number(id))+1].active = true;
  //   }
  // }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.SelectedId = id;
    })
  }

  Hello() {
    alert('Welcome here')
    this.greeting = 'book events';
    console.log('hello angular')
  }

  logMessage(myInput: any) {
    console.log(myInput);
  }

  sendMessage() {
    this.send.emit();
  }

  onSelect(per){
  //  this.router.navigate(['/Inventory',per.id])
  //to add flexibility in the path or links in our projects we should use relative path.
  this.router.navigate([per.id], {relativeTo:this.route});
  //so in this concept, inside the link parameter array we've added only parameter(i.e per.id ,id parameter) and 
  //second argument is object that has property 'relativeTo' and the present route i.e this.route so {relativeTo:this.route}.
  //this basically means whatever the url right now but to the current route append the department id (as example) and navigate to url
  }

  isSelected(per){
    return  per.id === this.SelectedId;
  }
}




