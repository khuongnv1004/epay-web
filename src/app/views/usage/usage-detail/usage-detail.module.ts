import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsageDetailComponent } from './usage-detail.component';


const routes: Routes = [
    {
      path: '',
      component: UsageDetailComponent ,
    },
  ];

@NgModule({
    declarations: [
      UsageDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes),
      CommonModule
    ],
    providers: [],
    
  })
  export class UsageDetailModule { }
  