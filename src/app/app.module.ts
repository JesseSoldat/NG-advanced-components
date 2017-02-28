import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';


import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { ExampleDef } from './main/example.interface';

import { ProductListComponent, ProductRowComponent } from './product.component';

import { StylesApp, StylesAppModule } from './styling/styling';
import { HostApp, HostAppModule } from './hosts/host';
import { TabsApp, Tabset, Tab } from './tabs/tabs';
import { ContentProjectionApp, Message } from './content-projection/content';
import { LifecycleApp, OnInitCmp, OnChangeCmp, DoCheckCmp, DoCheckItem, AftersCmp } from './lifecycle/lifecycle';
import { IfTemplateApp, IfTemplateAppModule } from './templates/if';
import { ForTemplateApp, ForTemplateAppModule } from './templates/for';

let examples: ExampleDef[] = [
 {label: 'Styling', name: 'Styling', path: 'styling', component: StylesApp },
 {label: 'Modifying Hosts', name: 'Host', path: 'hosts', component: HostApp },
 {label: 'Tabs', name: 'Tabs', path: 'tabs', component: TabsApp },
 {label: 'Content', name: 'Content', path: 'content', component: ContentProjectionApp },
 {label: 'Lifecycle', name: 'Lifecycle', path: 'lifecycle', component: LifecycleApp },
 {label: 'Template', name: 'Template', path: 'template', component: IfTemplateApp },
 {label: 'Template', name: 'Template', path: 'fortemplate', component: ForTemplateApp },


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
    Tab,
    ContentProjectionApp,
    Message,
    LifecycleApp,
    OnInitCmp,
    OnChangeCmp,
    DoCheckCmp,
    DoCheckItem,
    AftersCmp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StylesAppModule,
    HostAppModule,
    IfTemplateAppModule,
    ForTemplateAppModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
