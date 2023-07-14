import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaySheetComponent } from './pay-sheet/pay-sheet.component';

const routes: Routes = [
  {path: "",pathMatch:"full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "pay-sheet", component: PaySheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
