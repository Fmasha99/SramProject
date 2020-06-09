import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionOfCompaniesComponent } from './section-of-companies/section-of-companies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionOfCompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
