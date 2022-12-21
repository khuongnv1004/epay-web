import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FAQComponent } from './views/faq-page/faq.component';
import { UsageComponent } from './views/usage/usage.component';

@NgModule({
  declarations: [
    AppComponent, FAQComponent, UsageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
