import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';

import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
