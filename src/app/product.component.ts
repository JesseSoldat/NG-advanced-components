import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  inputs: ['productList'],
  template: `
  <div class="ui items">
	  <product-row
	  	*ngFor="let myProduct of productList"
	  	[product]="myProduct">
	  </product-row>
  </div>
  `
})
export class ProductListComponent {
	productList: any;
}

@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  template: `
  <div class="content">
  	<div class="header">{{product}}</div>	
  </div>
  `
})
export class ProductRowComponent {}