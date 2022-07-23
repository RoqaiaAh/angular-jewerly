import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { GoldBarComponent } from './gold-bar/gold-bar.component';
import { HomeComponent } from './home/home.component';
import { InventoriesComponent } from './inventories/inventories.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'branches',component:BranchesComponent},
  {path:'gold-bar',component:GoldBarComponent},
  {path:'inventories',component:InventoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
