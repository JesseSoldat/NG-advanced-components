import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';


//----------------------------------------------------
@Component({
  selector: 'inline-style',
  styles: [`
  .highlight {
    border: 2px solid red;
    background-color: yellow;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    Inline style example
  </h4>

  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `
})
export class InlineStyle {
}
//----------------------------------------------------
@Component({
  selector: `native-encapsulation`,
  styles: [`
  .highlight {
    text-align: center;
    border: 2px solid black;
    border-radius: 3px;
    margin-bottom: 20px;
  }`],
  template: `
  <h4 class="ui horizontal divider header">
    Native encapsulation example
  </h4>

  <div class="highlight">
    This component uses <code>ViewEncapsulation.Native</code>
  </div>
  `,
  encapsulation: ViewEncapsulation.Native
})
class NativeEncapsulation {
}
//----------------------------------------------------
@Component({
  selector: `no-encapsulation`,
  styles: [`
  .highlight {
    border: 2px dashed red;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    No encapsulation example
  </h4>

  <div class="highlight">
    This component uses <code>ViewEncapsulation.None</code>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
class NoEncapsulation {
}
//----------------------------------------------------



@Component({
	selector: 'styles-app',
	template: `
	<inline-style></inline-style>
	<native-encapsulation></native-encapsulation>
	<no-encapsulation></no-encapsulation>
  <ul>
    <li *ngFor="let a of array">{{a}}</li>
  </ul>

	`
})
export class StylesApp {
  array: number[];

  constructor(){
    this.array = [1,2,3,4,5];
  }
}


const components = [
	StylesApp,
	InlineStyle,
	NativeEncapsulation,
	NoEncapsulation
];

@NgModule({
	declarations: [components],
  imports: [
    CommonModule, 
  ],
	exports: components
})

export class StylesAppModule {}