import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAQDetailComponent } from './views/faq-page/detail/faq-detail.component';
import { FAQComponent } from './views/faq-page/faq.component';
import { UsageDetailComponent } from './views/usage/usage-detail/usage-detail.component';
import { UsageComponent } from './views/usage/usage.component';

const routes: Routes = [
  {
    path: 'faq',
    component: FAQComponent,
    data: {
      title: 'Page FAQ'
    },
    children: [
    ]
  },
  {
    path: 'faq/detail/:list_id/:id',
    component: FAQDetailComponent,
    loadChildren: () =>
    import('./views/faq-page/detail/faq-detail.module').then((m) => m.FAQDetailModule)
  },
  {
    path: 'usage',
    component: UsageComponent,
    data: {
      title: 'Page Usage'
    },
    children: [
    ]
  },
  {
    path: 'usage/detail/:list_id/:id',
    component: UsageDetailComponent,
    loadChildren: () =>
    import('./views/usage/usage-detail/usage-detail.module').then((m) => m.UsageDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
