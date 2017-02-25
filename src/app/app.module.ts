import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleDef } from './main/example.interface';

import { StylesApp, StylesAppModule } from './styling/styling';
import { HostApp, HostAppModule } from './hosts/host';

let examples: ExampleDef[] = [
 {label: 'Styling', name: 'Styling', path: 'styling', component: StylesApp },
 {label: 'Modifying Hosts', name: 'Host', path: 'hosts', component: HostApp },

]; 

const routes: Routes = examples
  .map( (example ) => ({
    path: example.path, component: example.component, pathMatch: 'full'
  }));

@NgModule({
  declarations: [
    AppComponent
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
