import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleDef } from './main/example.interface';

import { ProductListComponent, ProductRowComponent } from './product.component';

import { StylesApp, StylesAppModule } from './styling/styling';
import { HostApp, HostAppModule } from './hosts/host';
import { TabsApp, Tabset, Tab } from './tabs/tabs';

let examples: ExampleDef[] = [
 {label: 'Styling', name: 'Styling', path: 'styling', component: StylesApp },
 {label: 'Modifying Hosts', name: 'Host', path: 'hosts', component: HostApp },
 {label: 'Tabs', name: 'Tabs', path: 'tabs', component: TabsApp },

]; 

const routes: Routes = examples
  .map( (example ) => ({
    path: example.path, component: example.component, pathMatch: 'full'
  }));

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductRowComponent,
    TabsApp,
    Tabset,
    Tab
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StylesAppModule,
    HostAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
