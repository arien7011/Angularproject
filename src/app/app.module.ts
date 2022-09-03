import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { EmployeeService } from './employee.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostPaginationComponent } from './post-pagination/post-pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    PostPaginationComponent
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    TabsModule.forRoot(),Ng2SearchPipeModule,NgxPaginationModule,OrderModule,NgbModule
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
