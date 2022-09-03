import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
 
  {path:'Practice' ,component: PracticeComponent},
  {path:'Inventory-list', component:InventoryComponent},
  {path:'Filter', component:FilterComponent},
  { path: '',   redirectTo: '/Practice', pathMatch: 'full' },
  {path:'Inventory-list/:id', component:FilterComponent},
  {path:'**', component:PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
export const routingComponents= [PracticeComponent,InventoryComponent,FilterComponent,PageNotFoundComponent]