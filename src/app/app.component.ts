import { Component } from '@angular/core';

let array = [1,2,3,4];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	array;
	productList;

	constructor(){
		this.array = array;

		this.productList = [
      'shoes', 'pants', 'shirts'
      ];
	}
}
