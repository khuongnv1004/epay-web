import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FAQDetailComponent } from './faq-detail.component';


const routes: Routes = [
    {
      path: '',
      component: FAQDetailComponent ,
    },
  ];

@NgModule({
    declarations: [
      FAQDetailComponent
    ],
    imports: [
        RouterModule.forChild(routes),
      CommonModule
    ],
    providers: [],
    
  })
  export class FAQDetailModule { }
  